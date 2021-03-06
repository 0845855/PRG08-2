/// <reference path="miscItems.ts" />

namespace Block{
    export class Block extends MiscItems {

        public x:number;
        public y:number;
        public width: number;
        public height: number;
                
        constructor(parent: HTMLElement) {
            super("block", parent);

            this.x = 800;
            this.y = 240;

            this.width = 32;
            this.height = 31;
        }

        public draw():void {
            super.draw();
        }
    }
}
