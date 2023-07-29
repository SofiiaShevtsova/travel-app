interface Constants {
  ROUTES: {
    MAIN: string;
    REGISTRATION: string;
    LOGIN: string;
    TRIP: string;
    BOOKING: string;
    ALL: string;
  };
  APP_NAME: string;
  USER_NAME: string;
  REQUEST_API: {
    BASE_URL: string;
    AUTH: string;
    TRIPS: string;
    BOOKINGS: string;
  };

  ACTIONS: {
    SIGN_UP: string;
    SIGN_IN: string;
    GET_USER: string;
    LOG_OUT: string;
  };
}

export const constants: Constants = {
  APP_NAME: "Travel app",

  ROUTES: {
    MAIN: "/",
    REGISTRATION: "/sign-up",
    LOGIN: "/sign-in",
    TRIP: "trip/",
    BOOKING: "/booking",
    ALL: "*",
    },
      
    USER_NAME: "Git Hub",
  
  REQUEST_API: {
    BASE_URL: "https://binary-travel-app.xyz/api/v1",
    AUTH: "/auth",
    TRIPS: "/trips",
    BOOKINGS: "/bookings",
    },
  
  ACTIONS: {
    SIGN_UP: "auth/sign-up",
    SIGN_IN: "auth/sing-in",
    GET_USER: "auth/get-current-user",
    LOG_OUT: "auth/log-out",
  },
};
