import {sum} from '../sum'

test("Check sum", ()=> {
    expect((sum(2,5))).toBe(7)
    expect((sum(-4,-10))).toBe(-14)
} )


