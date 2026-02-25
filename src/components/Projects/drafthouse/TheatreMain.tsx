import React, { useEffect, useState } from 'react';
import type { CalendarData, Cinema, Session } from './interfaces';
import './TheatreMain.css';

interface TheatreMainProps {
  theatreId: string;
  onBack: () => void;
}

const TheatreMain: React.FC<TheatreMainProps> = ({ theatreId, onBack }) => {
  const [cinemaData, setCinemaData] = useState<Cinema | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedDays, setExpandedDays] = useState<Set<string>>(new Set());
  
  // Track selected showtime per film to show seat counts
  const [selectedSessions, setSelectedSessions] = useState<Record<string, Session>>({});

  const getPosterColor = (slug: string) => {
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
      hash = slug.charCodeAt(i) + ((hash << 5) - hash);
    }
    const c = (hash & 0x00FFFFFF).toString(16).toUpperCase();
    return "#" + "00000".substring(0, 6 - c.length) + c;
  };

  useEffect(() => {
    const fetchTheatreDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://feeds.drafthouse.com/adcService/showtimes.svc/calendar/${theatreId}/`);
        if (!response.ok) throw new Error("Connection lost to the projection booth.");
        const jsonData: CalendarData = await response.json();
        
        if (jsonData.Calendar.Cinemas.length > 0) {
          const cinema = jsonData.Calendar.Cinemas[0];
          setCinemaData(cinema);
          const firstDay = cinema.Months[0]?.Weeks[0]?.Days.find(d => d.Films && d.Films.length > 0);
          if (firstDay) setExpandedDays(new Set([firstDay.DateId]));
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    fetchTheatreDetails();
  }, [theatreId]);

  const toggleDay = (dateId: string) => {
    const newExpanded = new Set(expandedDays);
    if (newExpanded.has(dateId)) {
      newExpanded.delete(dateId);
    } else {
      newExpanded.add(dateId);
    }
    setExpandedDays(newExpanded);
  };

  const handleSessionClick = (filmId: string, session: Session) => {
    setSelectedSessions(prev => {
      const currentSelected = prev[filmId];
      
      // Toggle logic: If clicking the same session again, remove it
      if (currentSelected?.SessionId === session.SessionId) {
        const newState = { ...prev };
        delete newState[filmId];
        return newState;
      }

      // Otherwise, set the new session
      return {
        ...prev,
        [filmId]: session
      };
    });
  };

  if (loading) {
    return (
      <div className="preshow-container">
        <div className="film-grain-static"></div>
        <div className="preshow-content">
          <div className="countdown-circle"><div className="countdown-number"></div></div>
          <h2 className="preshow-text">Please Silence Your Phone</h2>
          <p className="preshow-subtext">The feature is being threaded into the projector...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="preshow-container error-state">
        <div className="film-grain-static"></div>
        <div className="error-card">
          <div className="error-card-border">
            <div className="error-header">
              <span className="marquee-text">INTERMISSION</span>
            </div>
            <div className="error-body">
              <h2 className="error-title">PROJECTOR MALFUNCTION</h2>
              <p className="error-message">
                We encountered a technical snag while threading the reels for this cinema.
              </p>
              <div className="error-details">
                <code>{error}</code>
              </div>
            </div>
            <div className="error-footer">
              <button className="alamo-btn error-btn" onClick={onBack}>
                RETURN TO LOBBY
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="theatre-page">
      <div className="theatre-hero">
        <div className="container">
          <span className="back-link" onClick={onBack}>← Change Location</span>
          <h1>{cinemaData?.CinemaName}</h1>
          <p>{cinemaData?.MarketName} • {cinemaData?.CinemaTimeZoneATE}</p>
        </div>
      </div>

      <div className="container">
        {cinemaData?.Months.map((month) => (
          <div key={month.MonthDate}>
            {month.Weeks.map((week) => (
              <div key={week.WeekNumber}>
                {week.Days.filter(d => d.Films && d.Films.length > 0).map((day) => {
                  const isExpanded = expandedDays.has(day.DateId);
                  return (
                    <div key={day.DateId} className="day-section">
                      <div 
                        className={`date-header ${isExpanded ? 'active' : ''}`} 
                        onClick={() => toggleDay(day.DateId)}
                      >
                        <span>{new Date(day.Date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
                        <span className="accordion-icon">{isExpanded ? '−' : '+'}</span>
                      </div>
                      
                      {isExpanded && (
                        <div className="film-grid">
                          {day.Films?.map(film => {
                            const activeSession = selectedSessions[film.FilmId];
                            return (
                              <div key={film.FilmId} className="film-card">
                                <div className="film-poster-placeholder" style={{ backgroundColor: getPosterColor(film.FilmSlug) }}>
                                  <div className="ticket-punch-hole left"></div>
                                  <div className="ticket-punch-hole right"></div>
                                  <div className="placeholder-content">
                                    <span className="placeholder-title">{film.FilmName}</span>
                                  </div>
                                </div>
                                <div className="film-card-content">
                                  <h3>{film.FilmName}</h3>
                                  <div className="film-meta">
                                    <span className="rating-badge">{film.FilmRating}</span>
                                    <span className="runtime-text">{film.FilmRuntime} MINS</span>
                                  </div>
                                  
                                  <div className="session-grid">
                                    {film.Series[0]?.Formats[0]?.Sessions.map(session => (
                                      <button 
                                        key={session.SessionId} 
                                        className={`show-times-buttons ${activeSession?.SessionId === session.SessionId ? 'selected' : ''}`}
                                        onClick={() => handleSessionClick(film.FilmId, session)}
                                      >
                                        {session.SessionTime}
                                      </button>
                                    ))}
                                  </div>

                                  {activeSession && (
                                    <div className="seat-alert-container">
                                      <div className="seat-count-box">
                                        <span className="seat-label">SEATS REMAINING</span>
                                        <span className={`seat-number ${parseInt(activeSession.SeatsLeft) < 10 ? 'low-stock' : ''}`}>
                                          {activeSession.SeatsLeft}
                                        </span>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheatreMain;