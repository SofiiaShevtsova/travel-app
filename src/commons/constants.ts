interface Constants {
    ROUTES: {
        MAIN: string;
        REGISTRATION: string;
        LOGIN: string;
        TRIP: string;
        BOOKING: string;
        ALL: string;
    },
    APP_NAME: string;
    USER_NAME: string;
}

export const constants: Constants = {
    ROUTES: {
        MAIN: '/',
        REGISTRATION: '/sign-up',
        LOGIN: "/sign-in",
        TRIP: "trip/",
        BOOKING: "/booking",
        ALL: "*"
    },
    APP_NAME: "Travel app",
    USER_NAME: "Git Hub"

}