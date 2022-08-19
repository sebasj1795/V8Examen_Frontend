export class IMenuTemplate {
    constructor(public id: number,
        public title: string,
        public routerLink: string | null,
        public href: string | null,
        public icon: string | null,
        public target: string | null,
        public hasSubMenu: boolean | null,
        public parentId: number) { }
}