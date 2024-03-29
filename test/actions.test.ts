import { Permutation, getPermInverse, getPermMul, permute } from "../groups"
import { Action } from "../groups/action";
import { Group, Homomorphism } from "../types";

test('Actions', () => {
  const perm3 = permute(3)

  const items = perm3.map(p => new Permutation(p))
  const e = items.find(p => p.toString() === '')
  const mul = getPermMul(items)
  const inverse = getPermInverse(items, mul)

  const s3 = new (class implements Group<Permutation> {
    e = e
    set = items

    mul = mul
    inverse = inverse

  })

  const A = ['a', 'b']
  const map: Homomorphism<[Permutation, string], string> = ([g, a]) => {
    if (g === s3.e) return a;

    if (['(1,2,3)', '(1,3,2)'].includes(g.toString())) return a

    return a === 'b' ? 'a' : 'b'
  }
  const action = new Action(s3, A, map)

  action.print_ga()
  action.print_gha()

})
