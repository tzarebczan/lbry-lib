const BN = require('bn.js');
const { expect } = require('chai');
const Difficulty = require('../../lib/util/difficulty');

describe('difficulty', () => {
  // Ensure CompactToBig converts numbers using the compact
  // representation to the expected big intergers.
  describe('#CompactToBig', () => {
    it('Should return BN representation of compact represenation', () => {
      const input = 10000000;
      const expected = new BN(0);
      const num = Difficulty.CompactToBig(input);
      expect(num.cmp(expected)).to.equal(0);
    });
  });
});



// Ensure BigToCompact converts big integers to the expected
// compact representation.
// func TestBigToCompact(t *testing.T) {
//     tests := []struct {
//         in  int64
//         out uint32
//     }{
//         {0, 0},
//         {-1, 25231360},
//     }
//
//     for x, test := range tests {
//         n := big.NewInt(test.in)
//         r := BigToCompact(n)
//         if r != test.out {
//             t.Errorf("TestBigToCompact test #%d failed: got %d want %d\n",
//                 x, r, test.out)
//             return
//         }
//     }
// }
