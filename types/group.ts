/*
 *  Injection (1-1)   Surjection (Onto)  Bijection (1-1 Onto)
 *
 *   Monomorhpism        Epimorphism        Isomorphism
 * 
 * ┌─────┐  ┌─────┐   ┌─────┐  ┌─────┐   ┌─────┐  ┌─────┐
 * │     │  │     │   │     │  │     │   │     │  │     │
 * │  a ─┼──┼─►1  │   │  a ─┼──┼─►1  │   │  a ─┼──┼─►1  │
 * │     │  │     │   │     │  │     │   │     │  │     │
 * │  b ─┼──┼─►2  │   │  b ─┼──┼─►2  │   │  b ─┼──┼─►2  │
 * │     │  │     │   │     │  │     │   │     │  │     │
 * │  c ─┼──┼─►3  │   │  c ─┼──┼─►3  │   │  c ─┼──┼─►3  │
 * │     │  │     │   │     │  │  ▲  │   │     │  │     │
 * │  d ─┼──┼─►4  │   │  d ─┼──┼──┘  │   │  d ─┼──┼─►4  │
 * │     │  │     │   │     │  │     │   │     │  │     │
 * └─────┘  │  5  │   └─────┘  └─────┘   └─────┘  └─────┘
 *          └─────┘
 *
 *                       Endomorphism      Automorphism
 * 
 *                    ┌─────┐  ┌─────┐   ┌─────┐  ┌─────┐
 *                    │     │  │     │   │     │  │     │
 *                    │  a ─┼──┼─►a  │   │  a ─┼──┼─►b  │
 *                    │     │  │     │   │     │  │     │
 *                    │  b ─┼──┼─►b  │   │  b ─┼──┼─►a  │
 *                    │     │  │     │   │     │  │     │
 *                    │  c ─┼──┼─►c  │   │  c ─┼──┼─►d  │
 *                    │     │  │  ▲  │   │     │  │     │
 *                    │  d ─┼──┼──┘  │   │  d ─┼──┼─►c  │
 *                    │     │  │  d  │   │     │  │     │
 *                    └─────┘  └─────┘   └─────┘  └─────┘
 */

// The Cancellation Law for Groups: Let (G,⋅) be a group and let a,b,c∈G. If a⋅b=a⋅c or b⋅a=c⋅a then b=c.

type UnaryOperation<T> = (s: T) => T
type BinaryOperation<T, U = T, V = T> = (s: T, t: U) => V

interface Semigroup<T> {
    set: T[]
    mul: BinaryOperation<T>
}
interface Monoid<T> extends Semigroup<T> {
    e: T
}

interface Group<T> extends Monoid<T> {
    inverse: UnaryOperation<T>
}

/* subgroup generated by X, X being a subset of G, gp(X) */
type SubGroupGenerator<T> = (x: T[]) => T[]
/* |gp({X}| - ord(x) */
type OrderOfSet<T> = (x: T[]) => number // ord|x| | |G|

/*
    let (G, ∗) and (H, ◦) be two groups.
    A homomorphism f, from G to H, is a map of sets f : G → H, such that f (x ∗ y) = f (x) ◦ f (y) ∀x, y ∈ G
    If G = H and f = Id G we call f the identity homomorphism.
*/
type Homomorphism<T1, T2> = (x: T1) => T2
/* A homomorphism f : G → H which is bijective is called an isomorphism. */
type Isomorphism<T1, T2> = Homomorphism<T1, T2>

/* A homomorphism from a group to itself (i.e. f : G → G) is called an endomorphism. */
type Endomorphism<T1, T2> = Homomorphism<T1, T2>
/* An endomorphism which is also an isomorphism is called an automorphism. */
type Automorphism<T1, T2> = Homomorphism<T1, T2>

// |xH| = |H|, Lagrange theorem: |H| | |G|
type Coset<T> = T[]

/* number of left cosets of H under G */
type IndexOfSubgroup = number;

export type {
    Group,
    Isomorphism,
    Coset,
    Homomorphism,
    BinaryOperation,
    UnaryOperation
} 