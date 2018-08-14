// http://www.glicko.net/glicko/glicko2.pdf

function g(t) {
    return 1/(Math.sqrt(1+3*(Math.pow(t, 2))/Math.pow(3.14159, 2)));
}

// Expected win for team with u0 versus team with u1 and t1
function e(u0, u1, t1) {
    return 1/(1+Math.pow(2.718281, -1*g(t1)*(u0 - u1)));
}