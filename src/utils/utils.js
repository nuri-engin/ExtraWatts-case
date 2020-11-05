export const GOOGLE_MAPS_KEY = "AIzaSyCOBZcyU7O87TNuZmaEhMZ7RGRILUYknRc";

export const generateRandomCoordinate = (from, to, fixed) => {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
};
