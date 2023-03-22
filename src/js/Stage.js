// import { TweenMax as TM } from 'gsap/all'
// import { map } from './utils/utils'
import Scene from './Scene'

// const offsetTitle = 100

export default class Stage {

    constructor($shaderType, $hrefLink) {
        this.progress = 0
        this.shaderType = $shaderType
        this.hrefLink = $hrefLink

        this.$els = {
            scene       : document.getElementById('scene'),
        }

        this.init()
    }

    init() {
        this.scene = new Scene(this.$els.scene, this.shaderType, this.hrefLink)
    }
}
