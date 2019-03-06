f = n =>
    n < 4e3 ? "M1000CM900D500CD400C100XC90L50XL40X10IX9V5IV4I1".replace(/(\D+)(\d+)/g,
        (_, r, d) =>
        r.repeat(n / d, n %= d)) : `(${f(n/1e3)})` + f(n % 1e3)