export const check = (answer, option ) => ({
   type : "CHECK",
   payload : [ answer, option ] 
});