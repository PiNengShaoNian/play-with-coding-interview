/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let mid = m
  let hi = n + m - 1
  const aux = []
  for (let i = 0; i < m; i++) {
    aux.push(nums1[i])
  }
  for (let i = 0; i < n; i++) {
    aux.push(nums2[i])
  }

  let i = 0
  let j = mid

  for (let k = 0; k <= hi; k++) {
    if (i >= mid) {
      nums1[k] = aux[j++]
    } else if (j > hi) {
      nums1[k] = aux[i++]
    } else if (aux[i] > aux[j]) {
      nums1[k] = aux[j++]
    } else {
      nums1[k] = aux[i++]
    }
  }
}
