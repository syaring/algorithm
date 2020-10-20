- Lesson 2 Arrays > [CyclicRotation](https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/)
- `painless`
- lang: java

```java
class Solution {
  public int[] solution(int[] A, int K) {
    if (A.length == 0) return A;

    int len = K % A.length;

    if (len == 0) return A;

    int[] res = new int[A.length];

    for (int i = 0; i < res.length; i ++) {
      if (i < len) res[i] = A[A.length - len + i];
      else res[i] = A[i - len];
    }

    return res;
  }
}
```
