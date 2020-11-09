const gotHitFile = require('./gotHit');


test('test1', () => {
    expect(gotHitFile.getHealth().toString().length).toBeGreaterThan(15);
});

test('test2', () => {
    gotHitFile.setHealth(100)

    let a = gotHitFile.attackAmount(7)
    let b = gotHitFile.attackAmount(7)

    gotHitFile.gotHit(a)

    let aAmt = gotHitFile.getHealth();
    expect(aAmt).toBe(100 - a)

    gotHitFile.setHealth(100)

    gotHitFile.gotHit(b)

    var bAmt = gotHitFile.getHealth()
    expect(bAmt).toBe(100 - b)
});