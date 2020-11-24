import generateArr from '../../util/generateArr'
import { binarySearch } from '../binary-search'

test('binarySearch正常工作', () => {
  const testArr = generateArr(10000, (i) => i)

  for (let i = 0; i < testArr.length; i++) {
    expect(binarySearch(testArr, testArr[i])).toBe(i)
  }
})
