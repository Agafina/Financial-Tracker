import { HasFormatter } from "../interfaces/hasFormatter";

export class ListTemplate{
    constructor(private container: HTMLUListElement){}

    render(item: HasFormatter, heading: string, pos: 'end' | 'start'){
        const li = document.createElement('li');

        const h4 = document.createElement('h4')
        h4.innerText = heading
        li.append(h4)

        const p = document.createElement('p')
        p.innerText = item.format()
        li.append(p)

        pos === 'start' ? this.container.prepend(li) :this.container.append(li)
    }
}