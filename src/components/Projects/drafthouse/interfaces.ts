export interface Theatre {
  name: string;
  marketSlug: string;
  cinemaSlug: string;
  id: string;
}

export interface SessionAttribute {
  AttributeId: string;
  AttributeName: string;
  AttributeDescription: string | null;
}

export interface Session {
  SessionId: string;
  SessionTime: string;
  SessionStatus: string;
  SessionSalesURL: string | null;
  SessionDateTime: string;
  SessionType: string;
  SeatsLeft: string;
  SeatingLow: string;
  Attributes: SessionAttribute[];
}

export interface Format {
  FormatId: string | null;
  FormatName: string | null;
  Sessions: Session[];
}

export interface Series {
  SeriesId: string | null;
  SeriesName: string | null;
  Formats: Format[];
}

export interface Film {
  FilmId: string;
  FilmName: string;
  FilmYear: string;
  FilmRating: string;
  FilmRuntime: string;
  FilmAgePolicy: string | null;
  FilmSlug: string;
  Series: Series[];
}

export interface Day {
  DayOfWeekNumber: string;
  DateId: string;
  Date: string;
  FillerDay: string;
  DayType: string;
  Films?: Film[];
}

export interface Week {
  WeekNumber: string;
  Days: Day[];
}

export interface Month {
  MonthDate: string;
  Weeks: Week[];
}

export interface Cinema {
  CinemaId: string;
  CinemaName: string;
  CinemaOrder: string;
  CinemaTimeZoneATE: string;
  MarketId: string;
  MarketName: string;
  CinemaSlug: string;
  MarketSlug: string;
  Months: Month[];
}

export interface CalendarData {
  Calendar: {
    FeedGenerated: string;
    SessionsGenerated: string;
    Cinemas: Cinema[];
  };
}