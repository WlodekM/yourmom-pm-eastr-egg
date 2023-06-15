(function(Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('This Hello World example must run unsandboxed');
  }

  class your {
    getInfo() {
      return {
        id: 'your',
        name: 'Unsandboxed Hello World',
        blocks: [
          {
            opcode: 'mom',
            blockType: Scratch.BlockType.REPORTER,
            text: 'your mmom!'
          }
        ]
      };
    }
    hello() {
      return 'World!';
    }
  }
  Scratch.extensions.register(new your());
})(Scratch);
