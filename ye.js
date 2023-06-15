(function(Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('This Hello World example must run unsandboxed');
  }

  class your {
    getInfo() {
      return {
        id: 'your',
        name: 'Your mom',
        color1: '#f57542',
        color2: '#f55d42',
        blocks: [
          {
            opcode: 'mom',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Your mother.'
          }
        ]
      };
    }
    mom() {
      return 'Click the block or run it to activate the easter egg!';
    }
  }
  Scratch.extensions.register(new your());
})(Scratch);
