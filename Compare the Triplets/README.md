# Compare the Triplets - Easy

The solution to this problem is written in JavaScript the detail about the problem is below and you can check the solution above.

## 💬 Description 💬

Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points.

## 🧪 Example 🧪

a = [1, 2, 3]
b = [3, 2, 1]
For elements _0_, Bob is awarded a point because a[0] .
For the equal elements a[1] and b[1], no points are earned.
Finally, for elements 2, a[2] > b[2] so Alice receives a point.
The return array is [1, 1] with Alice's score first and Bob's second.

## 🥚 Input 🥚

```
[5, 6, 7] [3, 6, 10] ( 2 Arrays of Integers)
```

## 🐣 Output 🐣

```
[1, 1] (Array of Integers)
```

## 👓 Explanation 👓

```
1# [5, 6, 7] [3, 6, 10]
2# [5 > 3] [6 === 6] [7 < 10]
2# [1,0,0]
3# [1] 🎉
```

## 🔗 Links 🔗

[Compare the Triplets](https://www.hackerrank.com/challenges/compare-the-triplets/problem)
