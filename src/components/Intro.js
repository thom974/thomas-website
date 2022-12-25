import { useEffect } from "react"

import anime from "animejs"

import { 
    Stack,
    Typography,
    Icon,
} from "@mui/material"

const Intro = () => {
    useEffect(() => {
        const nameLetters = document.querySelector('g.intro-name')
        const subheadingLetters = document.querySelector('g.intro-subheading')
        const introNameSvg = document.querySelector('svg.intro-name-svg')
        const introSubheadingSvg = document.querySelector('svg.intro-subheading-svg')

        introNameSvg.style.visibility = 'visible'
        introSubheadingSvg.style.visibility = 'visible'

        const nameLetterTargets = []
        const subheadingLetterTargets = []

        for (let i=0; i<nameLetters.children.length; i++) {
            const pathLength = nameLetters.children[i].getTotalLength()
            nameLetters.children[i].setAttribute('stroke-dasharray', pathLength)
            nameLetters.children[i].setAttribute('stroke-dashoffset', pathLength)
            nameLetterTargets.push(nameLetters.children[i])
        }

        for (let i=0; i<subheadingLetters.children.length; i++) {
            const pathLength = subheadingLetters.children[i].getTotalLength()
            subheadingLetters.children[i].setAttribute('stroke-dasharray', pathLength)
            subheadingLetters.children[i].setAttribute('stroke-dashoffset', pathLength)
            subheadingLetterTargets.push(subheadingLetters.children[i])
        }

        const nameTimeline = anime.timeline({
            direction: 'normal'
        })

        let complete = false

        // Animate name
        nameTimeline.add({
            targets: nameLetterTargets,
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutQuint',
            duration: 2500,
            complete: () => {
                document.querySelectorAll('.logo-desc').forEach(logoDesc => {
                    logoDesc.style.visibility = 'visible'
                })
            }
        }, 0)

        // Animate subheading
        nameTimeline.add({
            targets: subheadingLetterTargets,
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutQuint',
            duration: 2500,
        }, 0)

        // Animate colours
        nameTimeline.add({
            targets: nameLetterTargets,
            fill: '#A6BB5A',
            easing: 'easeInQuad',
            duration: 500,
        }, 2000)

        nameTimeline.add({
            targets: subheadingLetterTargets,
            fill: '#56642A',
            easing: 'easeInQuad',
            duration: 500,
            complete: () => {
                complete = true
            }
        }, 2000)

        // Animate main letters on hover
        const introName = document.querySelector('.intro-name-svg')
        introName.addEventListener('mouseenter', () => {
            if (complete) {
                anime.remove(nameLetterTargets)
                anime({
                    targets: nameLetterTargets,
                    strokeDashoffset: [0, anime.setDashoffset],
                    easing: 'easeOutQuint',
                    duration: 1000,
                })

                anime({
                    targets: nameLetterTargets,
                    fill: '#ffffff',
                    easing: 'easeOutQuint',
                    duration: 250,
                })
            }
        })

        introName.addEventListener('mouseleave', () => {
            if (complete) {
                anime.remove(nameLetterTargets)
                anime({
                    targets: nameLetterTargets,
                    strokeDashoffset: [anime.setDashoffset, 0],
                    easing: 'easeOutQuint',
                    duration: 500
                })

                anime({
                    targets: nameLetterTargets,
                    fill: '#A6BB5A',
                    easing: 'easeInOutQuint',
                    duration: 1000,
                })
            }
        })
    })

    return (
        <Stack
            mb={75}
            mt={120}
            direction='column'
            spacing={90}
            alignItems='flex-start'
        >
            <Stack
                direction='column'
                spacing={40}
                alignItems='flex-start'
            >
                {/* <Typography variant='title'>Thomas Luc</Typography> */}
                <svg className='intro-name-svg' viewBox="0 -5 284.226 37.337" height="97.99937" width="746.00047" visibility='hidden'>
                    <g fill='#ffffff' stroke='#a7bc5b' className='intro-name' aria-label="Thomas Luc" strokeWidth='0.265' transform="translate(-6.2559 -37.19016)">
                        <path d="M 13.981731,62.696014 V 42.446556 H 6.2558927 V 38.495443 H 26.328962 v 3.951113 h -7.761117 v 20.249458 z" />
                        <path d="m 29.503945,62.696014 v -25.50585 h 4.303892 v 9.066395 h 0.246945 q 0.599723,-0.740834 1.411112,-1.305279 0.811389,-0.564445 1.834446,-0.881945 1.058334,-0.352778 2.328335,-0.352778 1.76389,0 3.104446,0.635001 1.375834,0.635 2.151946,2.046112 0.776112,1.411112 0.776112,3.774725 v 12.523619 h -4.33917 V 50.948507 q 0,-0.987779 -0.246945,-1.622779 -0.211666,-0.670279 -0.670278,-1.058334 -0.423333,-0.423334 -1.058334,-0.599723 -0.635,-0.176389 -1.411112,-0.176389 -1.164167,0 -2.116668,0.564445 -0.917223,0.564445 -1.481668,1.552223 -0.529167,0.987778 -0.529167,2.293057 v 10.795007 z"/>
                        <path d="m 58.361173,63.119348 q -3.03389,0 -5.080003,-1.023056 -2.046112,-1.058334 -3.069169,-3.21028 -1.023056,-2.151946 -1.023056,-5.468059 0,-3.351392 1.023056,-5.46806 1.023057,-2.151946 3.069169,-3.175002 2.046113,-1.058334 5.080003,-1.058334 3.069169,0 5.080004,1.058334 2.046112,1.023056 3.069169,3.175002 1.023056,2.116668 1.023056,5.46806 0,3.316113 -1.023056,5.468059 -1.023057,2.151946 -3.069169,3.21028 -2.010835,1.023056 -5.080004,1.023056 z m 0,-3.52778 q 1.693335,0 2.716391,-0.635001 1.058334,-0.670278 1.516946,-1.975556 0.493889,-1.340557 0.493889,-3.316114 v -0.493889 q 0,-1.975557 -0.493889,-3.280836 -0.458612,-1.340556 -1.516946,-1.975556 -1.023056,-0.670279 -2.716391,-0.670279 -1.693334,0 -2.751668,0.670279 -1.023056,0.635 -1.516946,1.975556 -0.458611,1.305279 -0.458611,3.280836 v 0.493889 q 0,1.975557 0.458611,3.316114 0.49389,1.305278 1.516946,1.975556 1.058334,0.635001 2.751668,0.635001 z" />
                        <path d="M 71.202275,62.696014 V 44.139891 h 3.598336 l 0.352778,2.469446 h 0.246945 q 0.599722,-0.846667 1.375834,-1.481668 0.776112,-0.670278 1.76389,-1.023056 1.023056,-0.388056 2.222502,-0.388056 1.622778,0 2.892779,0.670278 1.270001,0.670279 1.975557,2.222502 h 0.246945 q 0.599722,-0.846667 1.411112,-1.481668 0.811389,-0.670278 1.869723,-1.023056 1.058334,-0.388056 2.293057,-0.388056 1.658057,0 2.928058,0.599723 1.270001,0.599722 2.010835,1.975557 0.740834,1.375834 0.740834,3.668891 V 62.696014 H 92.827568 V 50.842673 q 0,-0.952501 -0.211667,-1.587501 -0.211667,-0.670278 -0.599723,-1.023056 -0.352778,-0.388056 -0.917223,-0.564445 -0.529167,-0.176389 -1.164167,-0.176389 -1.023056,0 -1.834446,0.564445 -0.811389,0.564445 -1.305278,1.552223 -0.458612,0.987778 -0.458612,2.293057 V 62.696014 H 82.03256 V 50.842673 q 0,-0.952501 -0.211666,-1.587501 -0.211667,-0.670278 -0.599723,-1.023056 -0.352778,-0.388056 -0.917223,-0.564445 -0.529167,-0.176389 -1.164167,-0.176389 -1.023056,0 -1.869724,0.564445 -0.811389,0.564445 -1.305278,1.552223 -0.458612,0.987778 -0.458612,2.293057 v 10.795007 z" />
                        <path d="m 106.33897,63.119348 q -0.77611,0 -1.79917,-0.211667 -0.98778,-0.176389 -1.94028,-0.705556 -0.91722,-0.529167 -1.51694,-1.552223 -0.59973,-1.058334 -0.59973,-2.751669 0,-1.905001 0.84667,-3.139724 0.84667,-1.270001 2.36361,-1.975557 1.55223,-0.740834 3.6689,-1.023056 2.15194,-0.3175 4.69194,-0.3175 V 49.92545 q 0,-0.811389 -0.24694,-1.44639 -0.24695,-0.635 -0.91722,-0.987778 -0.635,-0.388056 -1.94028,-0.388056 -1.30528,0 -2.04612,0.3175 -0.74083,0.317501 -1.02305,0.776112 -0.28222,0.458611 -0.28222,0.952501 v 0.493889 h -4.16278 q -0.0353,-0.176389 -0.0353,-0.352778 0,-0.176389 0,-0.423334 0,-1.587501 0.9525,-2.751668 0.9525,-1.164168 2.64583,-1.76389 1.69334,-0.635001 3.91584,-0.635001 2.54,0 4.16278,0.705556 1.65806,0.705556 2.46945,2.010835 0.81139,1.305279 0.81139,3.175002 v 8.748895 q 0,0.670278 0.38805,0.9525 0.38806,0.282223 0.84667,0.282223 h 1.12889 v 2.963335 q -0.35278,0.141111 -1.02306,0.3175 -0.67028,0.211667 -1.65805,0.211667 -0.91723,0 -1.65806,-0.3175 -0.70556,-0.282222 -1.19945,-0.846667 -0.49389,-0.564445 -0.70555,-1.340557 h -0.21167 q -0.59972,0.740834 -1.44639,1.340557 -0.81139,0.564445 -1.94028,0.881945 -1.09361,0.3175 -2.54,0.3175 z m 1.30528,-3.52778 q 1.05833,0 1.86972,-0.3175 0.84667,-0.317501 1.37584,-0.881945 0.56444,-0.564445 0.84666,-1.375835 0.3175,-0.811389 0.3175,-1.76389 v -0.846667 q -1.94028,0 -3.59833,0.246945 -1.62278,0.246944 -2.61056,0.917222 -0.9525,0.670279 -0.9525,1.905002 0,0.635 0.28222,1.128889 0.3175,0.458612 0.91723,0.740834 0.635,0.246945 1.55222,0.246945 z" />
                        <path d="m 128.42286,63.119348 q -2.01083,0 -3.52778,-0.423334 -1.51694,-0.458611 -2.54,-1.234723 -1.02305,-0.776111 -1.55222,-1.799168 -0.49389,-1.058334 -0.49389,-2.293057 0,-0.176389 0,-0.3175 0.0353,-0.141111 0.0353,-0.211667 h 4.23333 q 0,0.07056 0,0.141112 0,0.07055 0,0.141111 0.0353,0.9525 0.59973,1.552223 0.56444,0.564445 1.48166,0.811389 0.91723,0.246945 1.94028,0.246945 0.91723,0 1.72862,-0.176389 0.84666,-0.211667 1.37583,-0.635 0.56444,-0.458612 0.56444,-1.164168 0,-0.917223 -0.70555,-1.411112 -0.70556,-0.493889 -1.86972,-0.811389 -1.12889,-0.317501 -2.43417,-0.670279 -1.16417,-0.3175 -2.32834,-0.705556 -1.16417,-0.388055 -2.11667,-0.987778 -0.91722,-0.599723 -1.51694,-1.552223 -0.56445,-0.952501 -0.56445,-2.363613 0,-1.375834 0.59973,-2.39889 0.59972,-1.023057 1.65805,-1.693335 1.05834,-0.705556 2.50473,-1.058334 1.44639,-0.352778 3.13972,-0.352778 1.65806,0 2.99861,0.352778 1.37584,0.352778 2.36362,1.023056 1.02305,0.635001 1.55222,1.587501 0.56445,0.917223 0.56445,2.046113 0,0.246944 -0.0353,0.493889 0,0.246945 0,0.282222 h -4.19806 V 49.29045 q 0,-0.670278 -0.42333,-1.12889 -0.38806,-0.493889 -1.16417,-0.776111 -0.74084,-0.282223 -1.86973,-0.282223 -0.84666,0 -1.48166,0.141111 -0.635,0.141112 -1.05834,0.388056 -0.38805,0.246945 -0.59972,0.564445 -0.21167,0.3175 -0.21167,0.705556 0,0.670278 0.52917,1.058334 0.52917,0.388056 1.41111,0.670278 0.91723,0.282223 1.97556,0.599723 1.27,0.352778 2.61056,0.740834 1.34055,0.352778 2.46944,0.917223 1.16417,0.564444 1.86973,1.587501 0.70555,1.023056 0.70555,2.71639 0,1.622779 -0.635,2.786947 -0.59972,1.128889 -1.72861,1.834445 -1.09361,0.670279 -2.61056,0.987779 -1.48167,0.3175 -3.24556,0.3175 z" />
                        <path d="M 147.71986,62.696014 V 38.495443 h 4.58611 v 20.21418 h 12.13556 v 3.986391 z"/>
                        <path d="m 173.33153,63.119348 q -2.68111,0 -4.37445,-1.44639 -1.65805,-1.481668 -1.65805,-5.009448 V 44.139891 h 4.30389 v 11.747508 q 0,0.987778 0.21166,1.658056 0.24695,0.635001 0.67028,1.058334 0.45861,0.388056 1.09361,0.564445 0.635,0.176389 1.41112,0.176389 1.16416,0 2.08139,-0.564445 0.9525,-0.564444 1.48166,-1.552223 0.56445,-1.023056 0.56445,-2.293057 V 44.139891 h 4.30389 v 18.556123 h -3.56306 l -0.35277,-2.469446 h -0.24695 q -0.635,0.846668 -1.51694,1.516946 -0.84667,0.635 -1.97556,0.987778 -1.09361,0.388056 -2.43417,0.388056 z"/>
                        <path d="m 195.73295,63.119348 q -2.89278,0 -4.83306,-1.023056 -1.905,-1.058334 -2.8575,-3.21028 -0.9525,-2.151946 -0.9525,-5.468059 0,-3.351392 0.9525,-5.46806 0.98777,-2.151946 2.89278,-3.175002 1.94027,-1.058334 4.79778,-1.058334 1.86972,0 3.31611,0.458612 1.44639,0.458611 2.46945,1.411112 1.05833,0.917223 1.5875,2.293057 0.52916,1.375834 0.52916,3.21028 h -4.37444 q 0,-1.305279 -0.38806,-2.151946 -0.38806,-0.846667 -1.19944,-1.270001 -0.77612,-0.458611 -2.01084,-0.458611 -1.44639,0 -2.36361,0.670278 -0.91722,0.670278 -1.37584,2.010834 -0.42333,1.305279 -0.42333,3.316114 v 0.458611 q 0,1.975557 0.42333,3.316114 0.45862,1.340556 1.41112,2.010834 0.9525,0.635001 2.50472,0.635001 1.19945,0 1.97556,-0.423334 0.81139,-0.458611 1.23472,-1.340556 0.42333,-0.881945 0.42333,-2.116668 h 4.16278 q 0,1.728612 -0.52916,3.104446 -0.52917,1.375834 -1.55223,2.328335 -1.02305,0.952501 -2.50472,1.44639 -1.44639,0.493889 -3.31611,0.493889 z" />
                    </g>
                </svg>
                {/* <Typography variant='subheading'>Hello! I'm a Computer Engineering student studying @ Waterloo!</Typography> */}
                <svg className='intro-subheading-svg' width="1096.04916" height="31.96665" viewBox="0 0 289.99634 8.45784" visibility='hidden'>
                    <g fill='none' stroke='#56642A' strokeWidth='0.1' className='intro-subheading' aria-label="Hello! I'm a Computer Engineering student studying @ Waterloo!" transform="translate(-36.20744 -80.65961)">
                        <path d="M40.71418 81.16232h.76729v6.17361h-.7673zM37.01 87.33593h-.75847v-6.1736h.75847zm3.77472-2.80458h-3.84527v-.66146h3.84527z" />
                        <path d="M45.3091 87.38003q-.74082 0-1.29645-.29986-.55562-.30868-.87312-.84667-.30868-.53799-.30868-1.2259 0-.68792.29986-1.2259.29986-.53799.8202-.83785.52917-.30868 1.19063-.30868t1.17298.29986q.52035.29986.8114.83785.29103.53798.29103 1.24354 0 .05292-.0088.11465v.11465h-4.00402v-.53798h3.60715l-.29104.19402q.0088-.47624-.20285-.84666-.20285-.37042-.56444-.57326-.35278-.21167-.8114-.21167-.46742 0-.82902.21167-.35278.20284-.55562.58208-.20285.37041-.20285.85548v.12348q0 .49388.22048.88194.22931.37924.62618.59972.4057.21167.92605.21167.42333 0 .7761-.14111.35278-.14993.60855-.4498l.4057.47626q-.30869.37041-.77612.56444-.46743.19403-1.03187.19403z" />
                        <path d="M48.64285 87.33593V80.7919h.74084v6.54403z" />
                        <path d="M51.05938 87.33593V80.7919h.74084v6.54403z" />
                        <path d="M55.425 87.38003q-.68791 0-1.23471-.29986-.538-.30868-.8555-.84667-.30867-.53799-.30867-1.2259 0-.69674.30868-1.2259.3175-.53799.85549-.83785.53798-.30868 1.23472-.30868.68791 0 1.2259.30868.5468.29986.85548.83785.30869.52916.30869 1.2259 0 .68791-.30869 1.2259-.30868.53799-.85548.84667-.53799.29986-1.2259.29986zm0-.64382q.47626 0 .84667-.21167.37042-.22049.58209-.60854.22048-.39687.22048-.9084 0-.52035-.22048-.9084-.21167-.38806-.58209-.59973-.37041-.21166-.84666-.21166-.47625 0-.84667.21166-.37042.21167-.5909.59972-.22049.38806-.22049.9084 0 .51154.22049.90841.22048.38805.5909.60854.37042.21167.84667.21167z" />
                        <path d="m59.07626 85.43093-.14111-4.2686h.8643l-.1411 4.2686zm.29104 1.9491q-.22049 0-.37042-.14993-.14993-.14993-.14993-.3616 0-.21167.14993-.35278.14993-.14993.37042-.14993.2293 0 .37042.14993.14993.14111.14993.35278 0 .21167-.14993.3616-.14111.14993-.37042.14993z" />
                        <path d="M63.84758 87.33593v-6.1736h.75847v6.1736z" />
                        <path d="m66.2112 83.51711-.05293-2.35479h.65264l-.06174 2.3548z" />
                        <path d="M74.04285 82.63517q.57326 0 .9966.22048.42333.22049.66145.67028.23813.44097.23813 1.12007v2.68993h-.74084v-2.61055q0-.70556-.33513-1.06716-.32632-.3616-.93487-.3616-.44097 0-.7761.19403-.33514.18521-.52035.5468-.1764.35279-.1764.87313v2.42535h-.74082v-2.61055q0-.70556-.33514-1.06716-.32632-.3616-.93486-.3616-.44098 0-.77611.19403-.33514.18521-.52035.5468-.17639.35279-.17639.87313v2.42535h-.74083v-4.65666h.70555v1.25236l-.11465-.26459q.22049-.48507.6791-.75847.46743-.2734 1.0936-.2734.67028 0 1.14653.33514.48507.33514.635 1.01423l-.29104-.11465q.20285-.55563.7232-.89076.52034-.34396 1.23472-.34396z" />
                        <path d="M82.8182 87.33593v-1.00542l-.03528-.17638v-1.70216q0-.56444-.32632-.8643-.3175-.30868-.9525-.30868-.44097 0-.83785.1411-.39687.14112-.6791.37924l-.3175-.5468q.3616-.29104.8555-.4498.5027-.16756 1.05832-.16756.92604 0 1.42875.4586.51153.45862.51153 1.39348v2.84868zm-1.56104.0441q-.52917 0-.91723-.16757-.37923-.17639-.5909-.48507-.21167-.30868-.21167-.70555 0-.37042.1764-.67028.17638-.30868.58208-.48507.4057-.1852 1.07597-.1852h1.5434v.53798H81.4071q-.65264 0-.89959.2293-.23812.22049-.23812.5468 0 .37042.29104.59091.29104.22049.81139.22049.5027 0 .87312-.22049.37042-.2293.53799-.66146l.14993.50271q-.16757.44097-.59972.69674-.42333.25576-1.07597.25576z" />
                        <path d="M90.35 87.39767q-.69673 0-1.29645-.2293-.5909-.23813-1.03188-.66147-.43215-.42333-.6791-.9966-.23812-.58208-.23812-1.26117 0-.6791.23813-1.25236.24694-.58209.68791-1.00542.44097-.42333 1.03188-.65264.59972-.23812 1.29645-.23812.69674 0 1.28764.23812.59972.2293 1.01424.69674l-.4939.48507q-.36159-.38806-.81138-.56445-.4498-.17639-.97014-.17639-.53798 0-.9966.18521-.4586.1852-.80256.52035-.34396.33514-.52917.78493-.1852.44979-.1852.97896 0 .52916.1852.97895.1852.4498.52917.78493.34396.33514.80257.52035.4586.1852.9966.1852.52034 0 .97013-.17638.4498-.1852.81139-.57326l.49389.48507q-.41452.46743-1.01424.70555-.5909.23813-1.29646.23813z" />
                        <path d="M95.61366 87.38003q-.68792 0-1.23472-.29986-.538-.30868-.8555-.84667-.30867-.53799-.30867-1.2259 0-.69674.30868-1.2259.3175-.53799.85549-.83785.53798-.30868 1.23472-.30868.68791 0 1.2259.30868.5468.29986.85548.83785.30869.52916.30869 1.2259 0 .68791-.30869 1.2259-.30868.53799-.85548.84667-.53799.29986-1.2259.29986zm0-.64382q.47625 0 .84666-.21167.37042-.22049.58209-.60854.22048-.39687.22048-.9084 0-.52035-.22048-.9084-.21167-.38806-.58209-.59973-.37041-.21166-.84666-.21166-.47625 0-.84667.21166-.37042.21167-.5909.59972-.22049.38806-.22049.9084 0 .51154.22049.90841.22048.38805.5909.60854.37042.21167.84667.21167z" />
                        <path d="M105.04164 82.63517q.57327 0 .9966.22048.42333.22049.66146.67028.23812.44097.23812 1.12007v2.68993h-.74083v-2.61055q0-.70556-.33514-1.06716-.32632-.3616-.93486-.3616-.44097 0-.77611.19403-.33514.18521-.52035.5468-.17639.35279-.17639.87313v2.42535h-.74083v-2.61055q0-.70556-.33514-1.06716-.32632-.3616-.93486-.3616-.44097 0-.77611.19403-.33514.18521-.52035.5468-.17639.35279-.17639.87313v2.42535h-.74083v-4.65666h.70556v1.25236l-.11466-.26459q.22049-.48507.6791-.75847.46743-.2734 1.09361-.2734.67028 0 1.14653.33514.48507.33514.635 1.01423l-.29104-.11465q.20284-.55563.72319-.89076.52035-.34396 1.23472-.34396z" />
                        <path d="M111.00358 87.38003q-.5909 0-1.07597-.26459-.48507-.2734-.77611-.80257-.28222-.52916-.28222-1.30527t.28222-1.29646q.28222-.52917.76729-.80257t1.08479-.2734q.6791 0 1.19944.29986.52917.29986.82903.83785.30868.52916.30868 1.23472 0 .71437-.30868 1.24354-.29986.52916-.82903.82903-.52034.29986-1.19944.29986zm-2.43417 1.66687v-6.36763h.70556V84.011l-.0529 1.00542.0882 1.01423v3.01625zm2.38125-2.3107q.46743 0 .83785-.21166.37042-.22049.5909-.60854.22049-.38806.22049-.9084 0-.52035-.22049-.9084-.22048-.38806-.5909-.59973-.37042-.21166-.83785-.21166-.47625 0-.84666.21166-.37042.21167-.59091.59972-.22048.38806-.22048.9084 0 .52035.22048.90841.22049.38805.59091.60854.37041.21167.84666.21167z" />
                        <path d="M116.50691 87.38003q-.59972 0-1.04951-.22049-.44097-.22049-.68792-.66146-.24694-.44979-.24694-1.12888v-2.68993h.73201v2.61055q0 .71437.34396 1.07597.35278.35278.98778.35278.46743 0 .80257-.1852.34396-.19404.52916-.55563.18521-.3616.18521-.87313v-2.42534h.73202v4.65666h-.70556v-1.26118l.12347.28222q-.2293.48507-.68791.75847-.45861.26459-1.05834.26459z" />
                        <path d="M122.05434 87.38003q-.6791 0-1.04952-.3616-.37041-.37042-.37041-1.0407v-4.3127h.74083v4.27743q0 .38805.19403.60854.20284.21167.57326.21167.39688 0 .67028-.2293l.23812.52916q-.1852.15875-.44979.23812-.26458.07937-.5468.07937zm-2.23132-4.0834v-.61736h2.92805v.61736z" />
                        <path d="M126.00025 87.38003q-.74083 0-1.29646-.29986-.55562-.30868-.87312-.84667-.30868-.53799-.30868-1.2259 0-.68792.29986-1.2259.29986-.53799.82021-.83785.52916-.30868 1.19062-.30868t1.17299.29986q.52035.29986.81139.83785.29104.53798.29104 1.24354 0 .05292-.009.11465v.11465h-4.00403v-.53798h3.60715l-.29104.19402q.009-.47624-.20284-.84666-.20285-.37042-.56445-.57326-.35278-.21167-.81139-.21167-.46743 0-.82902.21167-.35278.20284-.55563.58208-.20285.37041-.20285.85548v.12348q0 .49388.22049.88194.2293.37924.62618.59972.40569.21167.92604.21167.42333 0 .77611-.14111.35278-.14993.60854-.4498l.4057.47626q-.30868.37041-.77611.56444-.46743.19403-1.03188.19403z" />
                        <path d="M129.33399 87.33593v-4.65666h.70556v1.27l-.0706-.26459q.19403-.51153.65264-.7761.45861-.27341 1.13771-.27341v.7232q-.0441-.0088-.0882-.0088-.0441-.0088-.0882-.0088-.69673 0-1.10243.43214-.40569.42334-.40569 1.21709v2.34597z" />
                        <path d="M136.08088 83.86989h3.21909v.66146h-3.21909zm.0705 2.80458h3.66007v.66146h-4.41854v-6.1736h4.29507v.66145h-3.5366z" />
                        <path d="M143.58622 82.63517q.57326 0 1.00542.22048.43215.22049.67909.67028.24695.44097.24695 1.12007v2.68993h-.74083v-2.61055q0-.70556-.35278-1.06716-.34396-.3616-.97896-.3616-.46743 0-.82021.19403-.34396.18521-.53798.5468-.18521.35279-.18521.87313v2.42535h-.74083v-4.65666h.70555v1.27l-.11465-.28223q.2293-.48507.70555-.75847t1.12889-.2734z" />
                        <path d="M149.16012 89.091q-.635 0-1.23472-.18521-.59091-.17639-.96132-.52035l.3616-.56444q.32631.29104.80256.45861.48507.16757 1.00542.16757.85549 0 1.26118-.4057.40569-.39687.40569-1.2259v-1.06715l.0882-.85548-.0617-.87313v-1.34055h.70556v4.05694q0 1.21708-.59972 1.78153-.59973.57326-1.77271.57326zm-.10583-1.94028q-.67028 0-1.20827-.28222-.52916-.29104-.83784-.80257-.30869-.51153-.30869-1.17299 0-.6791.30869-1.1818.30868-.51153.83784-.79375.53799-.28222 1.20827-.28222.60854 0 1.09361.25576.49388.24695.78493.74965.29986.50271.29986 1.25236 0 .74084-.29986 1.24355-.29105.5027-.78493.75847-.48507.25576-1.09361.25576zm.0705-.65264q.49389 0 .87313-.20284.37923-.20285.5909-.56445.22048-.37041.22048-.83784 0-.48507-.22048-.84667-.21167-.3616-.5909-.55563-.37924-.20284-.87313-.20284-.48507 0-.87312.20284-.37924.19403-.59973.55563-.21166.3616-.21166.84667 0 .46743.21166.83784.22049.3616.59973.56445.38805.20284.87312.20284z" />
                        <path d="M153.21706 87.33593v-4.65666h.74083v4.65666zm.37041-5.61798q-.22048 0-.37041-.14111-.14111-.14993-.14111-.35278 0-.21167.14111-.35278.14993-.14111.37041-.14111.22049 0 .3616.14111.14993.1323.14993.34396 0 .21167-.14111.3616-.14111.1411-.37042.1411z" />
                        <path d="M158.05893 82.63517q.57326 0 1.00542.22048.43215.22049.67909.67028.24695.44097.24695 1.12007v2.68993h-.74083v-2.61055q0-.70556-.35278-1.06716-.34396-.3616-.97896-.3616-.46743 0-.82021.19403-.34396.18521-.53798.5468-.18521.35279-.18521.87313v2.42535h-.74083v-4.65666h.70555v1.27l-.11465-.28223q.2293-.48507.70555-.75847t1.12889-.2734z" />
                        <path d="M163.65047 87.38003q-.74084 0-1.29646-.29986-.55563-.30868-.87313-.84667-.30868-.53799-.30868-1.2259 0-.68792.29987-1.2259.29986-.53799.8202-.83785.52917-.30868 1.19063-.30868t1.17298.29986q.52035.29986.81139.83785.29104.53798.29104 1.24354 0 .05292-.009.11465v.11465h-4.00402v-.53798h3.60715l-.29104.19402q.009-.47624-.20285-.84666-.20285-.37042-.56444-.57326-.35278-.21167-.81139-.21167-.46743 0-.82903.21167-.35278.20284-.55562.58208-.20285.37041-.20285.85548v.12348q0 .49388.22048.88194.22931.37924.62618.59972.4057.21167.92605.21167.42333 0 .77611-.14111.35277-.14993.60854-.4498l.40569.47626q-.30868.37041-.77611.56444-.46743.19403-1.03187.19403z" />
                        <path d="M169.01268 87.38003q-.74083 0-1.29646-.29986-.55562-.30868-.87312-.84667-.30868-.53799-.30868-1.2259 0-.68792.29986-1.2259.29986-.53799.82021-.83785.52916-.30868 1.19062-.30868t1.17299.29986q.52034.29986.81138.83785.29105.53798.29105 1.24354 0 .05292-.009.11465v.11465h-4.00403v-.53798h3.60715l-.29104.19402q.009-.47624-.20285-.84666-.20284-.37042-.56444-.57326-.35278-.21167-.81139-.21167-.46743 0-.82903.21167-.35277.20284-.55562.58208-.20285.37041-.20285.85548v.12348q0 .49388.22049.88194.2293.37924.62618.59972.40569.21167.92604.21167.42333 0 .77611-.14111.35278-.14993.60854-.4498l.4057.47626q-.30868.37041-.77612.56444-.46743.19403-1.03187.19403z" />
                        <path d="M172.34642 87.33593v-4.65666h.70556v1.27l-.0706-.26459q.19403-.51153.65264-.7761.45861-.27341 1.13771-.27341v.7232q-.0441-.0088-.0882-.0088-.0441-.0088-.0882-.0088-.69674 0-1.10243.43214-.40569.42334-.40569 1.21709v2.34597z" />
                        <path d="M175.86382 87.33593v-4.65666h.74083v4.65666zm.37041-5.61798q-.22048 0-.37041-.14111-.14111-.14993-.14111-.35278 0-.21167.14111-.35278.14993-.14111.37041-.14111.22049 0 .3616.14111.14993.1323.14993.34396 0 .21167-.14111.3616-.14111.1411-.37042.1411z" />
                        <path d="M180.7057 82.63517q.57326 0 1.00541.22048.43216.22049.6791.67028.24694.44097.24694 1.12007v2.68993h-.74083v-2.61055q0-.70556-.35278-1.06716-.34395-.3616-.97895-.3616-.46743 0-.82021.19403-.34396.18521-.53799.5468-.18521.35279-.18521.87313v2.42535h-.74083v-4.65666h.70556v1.27l-.11466-.28223q.22931-.48507.70556-.75847.47625-.2734 1.12889-.2734z" />
                        <path d="M186.27959 89.091q-.635 0-1.23472-.18521-.59091-.17639-.96132-.52035l.36159-.56444q.32632.29104.80257.45861.48507.16757 1.00542.16757.85548 0 1.26118-.4057.40569-.39687.40569-1.2259v-1.06715l.0882-.85548-.0617-.87313v-1.34055h.70556v4.05694q0 1.21708-.59973 1.78153-.59972.57326-1.7727.57326zm-.10584-1.94028q-.67027 0-1.20826-.28222-.52917-.29104-.83785-.80257-.30868-.51153-.30868-1.17299 0-.6791.30868-1.1818.30868-.51153.83785-.79375.53799-.28222 1.20826-.28222.60855 0 1.09361.25576.49389.24695.78493.74965.29987.50271.29987 1.25236 0 .74084-.29987 1.24355-.29104.5027-.78493.75847-.48506.25576-1.09361.25576zm.0706-.65264q.49389 0 .87312-.20284.37924-.20285.59091-.56445.22048-.37041.22048-.83784 0-.48507-.22048-.84667-.21167-.3616-.59091-.55563-.37923-.20284-.87312-.20284-.48507 0-.87313.20284-.37923.19403-.59972.55563-.21166.3616-.21166.84667 0 .46743.21166.83784.22049.3616.59972.56445.38806.20284.87313.20284z" />
                        <path d="M193.97897 87.38003q-.58208 0-1.10243-.15875t-.81139-.39688l.3175-.58208q.29104.21167.73201.3616.44098.1411.90841.1411.62618 0 .89958-.1852.28222-.19403.28222-.51153 0-.23812-.15875-.37041-.15875-.1323-.42333-.20285t-.5909-.11466q-.3175-.05292-.635-.12347-.3175-.07937-.59091-.21166-.26458-.14111-.42333-.37924-.15875-.24694-.15875-.64382 0-.39687.22049-.70555.2293-.30868.65264-.48507.42333-.1764 1.02305-.1764.44979 0 .9084.11466.46743.11465.75848.3175l-.3175.58208q-.30869-.20284-.66146-.29104-.34396-.08819-.69674-.08819-.5909 0-.87312.20285-.28223.19403-.28223.5027 0 .24695.15875.38806.16757.14111.43216.22049.26458.07937.58208.13229.3175.0441.635.12347.3175.07056.58208.20285.27341.1323.43216.37042.15875.2293.15875.61736 0 .41451-.23813.7232-.2293.29985-.67028.46742-.43215.15875-1.04951.15875z" />
                        <path d="M198.58273 87.38003q-.6791 0-1.04952-.3616-.37041-.37042-.37041-1.0407v-4.3127h.74083v4.27743q0 .38805.19403.60854.20284.21167.57326.21167.39688 0 .67028-.2293l.23812.52916q-.18521.15875-.44979.23812-.26458.07937-.5468.07937zm-2.23132-4.0834v-.61736h2.92805v.61736z" />
                        <path d="M202.60439 87.38003q-.59972 0-1.04952-.22049-.44097-.22049-.68791-.66146-.24695-.44979-.24695-1.12888v-2.68993h.73202v2.61055q0 .71437.34395 1.07597.35278.35278.98778.35278.46743 0 .80257-.1852.34396-.19404.52917-.55563.18521-.3616.18521-.87313v-2.42534h.73201v4.65666h-.70556v-1.26118l.12348.28222q-.22931.48507-.68792.75847-.45861.26459-1.05833.26459z" />
                        <path d="M208.50458 87.38003q-.67028 0-1.19944-.29986-.52917-.29987-.83785-.82903-.29986-.53799-.29986-1.24354 0-.70556.29986-1.23472.30868-.53799.83785-.83785.52916-.29986 1.19944-.29986.59972 0 1.07597.2734.48507.2734.76729.80257.29104.52035.29104 1.29646 0 .76729-.28222 1.30528-.28222.52916-.76729.80256-.47625.26459-1.08479.26459zm.0617-.64382q.46743 0 .83784-.21167.37042-.22049.59091-.60854.22048-.39687.22048-.9084 0-.52035-.22048-.9084-.22049-.38806-.59091-.59973-.37041-.21166-.83784-.21166-.47625 0-.84667.21166-.37042.21167-.5909.59972-.22049.38806-.22049.9084 0 .51154.22049.90841.22048.38805.5909.60854.37042.21167.84667.21167zm1.66687.59972v-1.32292l.0529-1.01423-.0882-1.00542v-3.20145h.74084v6.54402z" />
                        <path d="M214.64291 87.38003q-.74083 0-1.29645-.29986-.55563-.30868-.87313-.84667-.30868-.53799-.30868-1.2259 0-.68792.29986-1.2259.29986-.53799.82021-.83785.52917-.30868 1.19062-.30868.66146 0 1.17299.29986.52035.29986.81139.83785.29104.53798.29104 1.24354 0 .05292-.009.11465v.11465h-4.00402v-.53798h3.60715l-.29105.19402q.009-.47624-.20284-.84666-.20285-.37042-.56445-.57326-.35277-.21167-.81139-.21167-.46743 0-.82902.21167-.35278.20284-.55563.58208-.20284.37041-.20284.85548v.12348q0 .49388.22048.88194.22931.37924.62618.59972.4057.21167.92604.21167.42334 0 .77611-.14111.35278-.14993.60854-.4498l.4057.47626q-.30868.37041-.77611.56444-.46743.19403-1.03188.19403z" />
                        <path d="M220.402 82.63517q.57327 0 1.00542.22048.43215.22049.67909.67028.24695.44097.24695 1.12007v2.68993h-.74083v-2.61055q0-.70556-.35278-1.06716-.34396-.3616-.97896-.3616-.46743 0-.82021.19403-.34396.18521-.53798.5468-.18521.35279-.18521.87313v2.42535h-.74083v-4.65666h.70555v1.27l-.11465-.28223q.2293-.48507.70555-.75847t1.12889-.2734z" />
                        <path d="M225.49966 87.38003q-.6791 0-1.04952-.3616-.37041-.37042-.37041-1.0407v-4.3127h.74083v4.27743q0 .38805.19403.60854.20285.21167.57326.21167.39688 0 .67028-.2293l.23812.52916q-.1852.15875-.44979.23812-.26458.07937-.5468.07937zm-2.23132-4.0834v-.61736h2.92805v.61736z" />
                        <path d="M231.22348 87.38003q-.58209 0-1.10243-.15875-.52035-.15875-.81139-.39688l.3175-.58208q.29104.21167.73201.3616.44097.1411.9084.1411.62618 0 .89959-.1852.28222-.19403.28222-.51153 0-.23812-.15875-.37041-.15875-.1323-.42333-.20285-.26459-.07055-.59091-.11466-.3175-.05292-.635-.12347-.3175-.07937-.5909-.21166-.26458-.14111-.42333-.37924-.15875-.24694-.15875-.64382 0-.39687.22048-.70555.22931-.30868.65264-.48507.42334-.1764 1.02306-.1764.44979 0 .9084.11466.46743.11465.75847.3175l-.3175.58208q-.30868-.20284-.66146-.29104-.34395-.08819-.69673-.08819-.5909 0-.87313.20285-.28222.19403-.28222.5027 0 .24695.15875.38806.16757.14111.43215.22049.26459.07937.58209.13229.3175.0441.635.12347.3175.07056.58208.20285.2734.1323.43215.37042.15875.2293.15875.61736 0 .41451-.23812.7232-.22931.29985-.67028.46742-.43215.15875-1.04951.15875z" />
                        <path d="M235.82723 87.38003q-.67909 0-1.04951-.3616-.37042-.37042-.37042-1.0407v-4.3127h.74084v4.27743q0 .38805.19402.60854.20285.21167.57327.21167.39687 0 .67027-.2293l.23813.52916q-.18521.15875-.44979.23812-.26459.07937-.54681.07937zm-2.23132-4.0834v-.61736h2.92806v.61736z" />
                        <path d="M239.84889 87.38003q-.59972 0-1.04951-.22049-.44097-.22049-.68792-.66146-.24694-.44979-.24694-1.12888v-2.68993h.73201v2.61055q0 .71437.34396 1.07597.35278.35278.98778.35278.46743 0 .80257-.1852.34396-.19404.52916-.55563.18521-.3616.18521-.87313v-2.42534h.73202v4.65666h-.70556v-1.26118l.12347.28222q-.2293.48507-.68791.75847-.45861.26459-1.05834.26459z" />
                        <path d="M245.74909 87.38003q-.67028 0-1.19945-.29986-.52916-.29987-.83784-.82903-.29986-.53799-.29986-1.24354 0-.70556.29986-1.23472.30868-.53799.83784-.83785.52917-.29986 1.19945-.29986.59972 0 1.07597.2734.48507.2734.76729.80257.29104.52035.29104 1.29646 0 .76729-.28222 1.30528-.28222.52916-.76729.80256-.47625.26459-1.08479.26459zm.0617-.64382q.46743 0 .83785-.21167.37042-.22049.5909-.60854.22049-.39687.22049-.9084 0-.52035-.22049-.9084-.22048-.38806-.5909-.59973-.37042-.21166-.83785-.21166-.47625 0-.84666.21166-.37042.21167-.59091.59972-.22048.38806-.22048.9084 0 .51154.22048.90841.22049.38805.59091.60854.37041.21167.84666.21167zm1.66688.59972v-1.32292l.0529-1.01423-.0882-1.00542v-3.20145h.74083v6.54402z" />
                        <path d="M249.98242 89.091q-.33514 0-.64382-.10583-.30868-.10584-.52034-.3175l.32632-.55563q.16756.17639.37923.26458.21167.0882.45861.0882.30868 0 .52035-.16757.22048-.15876.40569-.58209l.29986-.66146.0706-.10583 1.86972-4.2686h.73201l-2.29305 5.16818q-.20285.47625-.44979.74966-.23813.2734-.52917.37923-.28222.11465-.62618.11465zm1.16417-1.61396-2.12549-4.79777h.76729l1.84327 4.20687z" />
                        <path d="M254.70964 87.33593v-4.65666h.74084v4.65666zm.37042-5.61798q-.22049 0-.37042-.14111-.14111-.14993-.14111-.35278 0-.21167.14111-.35278.14993-.14111.37042-.14111.22048 0 .3616.14111.14993.1323.14993.34396 0 .21167-.14111.3616-.14112.1411-.37042.1411z" />
                        <path d="M259.55151 82.63517q.57326 0 1.00541.22048.43216.22049.6791.67028.24694.44097.24694 1.12007v2.68993h-.74083v-2.61055q0-.70556-.35278-1.06716-.34395-.3616-.97895-.3616-.46743 0-.82021.19403-.34396.18521-.53799.5468-.18521.35279-.18521.87313v2.42535h-.74083v-4.65666h.70556v1.27l-.11466-.28223q.22931-.48507.70556-.75847.47625-.2734 1.12889-.2734z" />
                        <path d="M265.1254 89.091q-.635 0-1.23472-.18521-.59091-.17639-.96132-.52035l.36159-.56444q.32632.29104.80257.45861.48507.16757 1.00542.16757.85548 0 1.26118-.4057.40569-.39687.40569-1.2259v-1.06715l.0882-.85548-.0617-.87313v-1.34055h.70556v4.05694q0 1.21708-.59973 1.78153-.59972.57326-1.7727.57326zm-.10584-1.94028q-.67027 0-1.20826-.28222-.52917-.29104-.83785-.80257-.30868-.51153-.30868-1.17299 0-.6791.30868-1.1818.30868-.51153.83785-.79375.53799-.28222 1.20826-.28222.60855 0 1.09361.25576.49389.24695.78493.74965.29987.50271.29987 1.25236 0 .74084-.29987 1.24355-.29104.5027-.78493.75847-.48506.25576-1.09361.25576zm.0706-.65264q.49389 0 .87312-.20284.37924-.20285.59091-.56445.22048-.37041.22048-.83784 0-.48507-.22048-.84667-.21167-.3616-.59091-.55563-.37923-.20284-.87312-.20284-.48507 0-.87313.20284-.37923.19403-.59972.55563-.21166.3616-.21166.84667 0 .46743.21166.83784.22049.3616.59972.56445.38806.20284.87313.20284z" />
                        <path d="M275.24131 89.10864q-.91723 0-1.6757-.29986-.74965-.29105-1.29645-.82903-.54681-.53799-.84667-1.27-.29104-.74083-.29104-1.61396 0-.88194.29986-1.60514.29986-.732.84666-1.26118.55563-.53798 1.3141-.82902.76729-.29986 1.68451-.29986.89959 0 1.64042.28222.74965.28222 1.29646.80257.55562.51152.85548 1.2259.29986.71437.29986 1.56986 0 .74965-.1852 1.28764-.17639.53798-.52035.82903-.33514.28222-.81139.28222-.47625 0-.75847-.28222-.28222-.28223-.28222-.8114v-.65263l.0529-.5468-.0794-.94369v-1.25236h.67028v3.25438q0 .3616.14993.51152.15875.14111.37041.14111.27341 0 .46743-.21166.19403-.21167.29104-.61736.10584-.4057.10584-.97014 0-.75847-.25577-1.37583-.25576-.62618-.74083-1.07598-.47625-.44979-1.12889-.68791-.65264-.23813-1.43757-.23813-.80256 0-1.46402.25577-.65264.25576-1.12889.7232-.46743.4586-.73201 1.0936-.25577.635-.25577 1.4023 0 .76728.25577 1.4111.25576.64382.72319 1.10243.46743.46743 1.11125.7232.65264.25576 1.45521.25576.39687 0 .84666-.09701.45861-.09701.84667-.29104l.17639.5027q-.4057.20285-.91722.29987-.50271.10583-.9525.10583zm-.14111-1.72861q-.62618 0-1.12007-.29104-.48507-.29105-.76729-.80257-.28223-.52035-.28223-1.1818 0-.66147.28223-1.16417.28222-.51153.76729-.80257.49389-.29105 1.12007-.29105.60854 0 1.07597.2734.46743.2646.73201.7673.26458.5027.26458 1.21708 0 .71438-.26458 1.2259-.25576.51153-.72319.78493-.45861.26459-1.08479.26459zm.10583-.59973q.45861 0 .81139-.20284.36159-.20285.57326-.58209.21167-.37923.21167-.89076t-.21167-.88194q-.21167-.37924-.57326-.57327-.35278-.20284-.81139-.20284-.46743 0-.82903.20284-.35278.20285-.55562.58209-.20285.37041-.20285.87312t.20285.88195q.20284.37923.55562.5909.3616.20284.82903.20284z" />
                        <path d="m284.51936 87.33593-2.07257-6.1736h.79375l1.92264 5.75027h-.39688l1.98437-5.75028h.71438l1.9491 5.75028h-.37924l1.94028-5.75028h.73201l-2.07257 6.17361h-.80257l-1.84326-5.3975h.20285l-1.86091 5.3975z" />
                        <path d="M295.27023 87.33593v-1.00542l-.0353-.17638v-1.70216q0-.56444-.32632-.8643-.3175-.30868-.9525-.30868-.44097 0-.83785.1411-.39687.14112-.6791.37924l-.3175-.5468q.3616-.29104.85549-.4498.50271-.16756 1.05833-.16756.92604 0 1.42875.4586.51153.45862.51153 1.39348v2.84868zm-1.56104.0441q-.52916 0-.91722-.16757-.37923-.17639-.5909-.48507-.21167-.30868-.21167-.70555 0-.37042.17639-.67028.17639-.30868.58208-.48507.4057-.1852 1.07598-.1852h1.5434v.53798h-1.50813q-.65263 0-.89958.2293-.23812.22049-.23812.5468 0 .37042.29104.59091.29104.22049.81139.22049.5027 0 .87312-.22049.37042-.2293.53799-.66146l.14993.50271q-.16757.44097-.59972.69674-.42334.25576-1.07598.25576z"/>
                        <path d="M299.14199 87.38003q-.6791 0-1.04951-.3616-.37042-.37042-.37042-1.0407v-4.3127h.74083v4.27743q0 .38805.19403.60854.20285.21167.57327.21167.39687 0 .67027-.2293l.23813.52916q-.18521.15875-.44979.23812-.26459.07937-.54681.07937zm-2.23132-4.0834v-.61736h2.92806v.61736z" />
                        <path d="M303.08788 87.38003q-.74084 0-1.29646-.29986-.55563-.30868-.87313-.84667-.30868-.53799-.30868-1.2259 0-.68792.29986-1.2259.29986-.53799.82021-.83785.52917-.30868 1.19063-.30868.66145 0 1.17298.29986.52035.29986.81139.83785.29104.53798.29104 1.24354 0 .05292-.009.11465v.11465h-4.00402v-.53798h3.60715l-.29104.19402q.009-.47624-.20285-.84666-.20285-.37042-.56445-.57326-.35277-.21167-.81138-.21167-.46743 0-.82903.21167-.35278.20284-.55563.58208-.20284.37041-.20284.85548v.12348q0 .49388.22048.88194.22931.37924.62618.59972.4057.21167.92604.21167.42334 0 .77612-.14111.35277-.14993.60854-.4498l.40569.47626q-.30868.37041-.77611.56444-.46743.19403-1.03187.19403z" />
                        <path d="M306.42165 87.33593v-4.65666h.70555v1.27l-.0706-.26459q.19403-.51153.65264-.7761.45861-.27341 1.1377-.27341v.7232q-.0441-.0088-.0882-.0088-.0441-.0088-.0882-.0088-.69674 0-1.10243.43214-.4057.42334-.4057 1.21709v2.34597z" />
                        <path d="M309.93904 87.33593V80.7919h.74084v6.54403z" />
                        <path d="M314.30464 87.38003q-.68791 0-1.23472-.29986-.53798-.30868-.85548-.84667-.30868-.53799-.30868-1.2259 0-.69674.30868-1.2259.3175-.53799.85548-.83785.53799-.30868 1.23472-.30868.68792 0 1.22591.30868.5468.29986.85548.83785.30868.52916.30868 1.2259 0 .68791-.30868 1.2259t-.85548.84667q-.53799.29986-1.22591.29986zm0-.64382q.47625 0 .84667-.21167.37042-.22049.58208-.60854.22049-.39687.22049-.9084 0-.52035-.22049-.9084-.21166-.38806-.58208-.59973-.37042-.21166-.84667-.21166t-.84666.21166q-.37042.21167-.59091.59972-.22048.38806-.22048.9084 0 .51154.22048.90841.22049.38805.59091.60854.37041.21167.84666.21167z" />
                        <path d="M319.86974 87.38003q-.68792 0-1.23472-.29986-.53799-.30868-.85549-.84667-.30868-.53799-.30868-1.2259 0-.69674.30868-1.2259.3175-.53799.85549-.83785.53798-.30868 1.23472-.30868.68791 0 1.2259.30868.5468.29986.85549.83785.30868.52916.30868 1.2259 0 .68791-.30868 1.2259-.30869.53799-.85549.84667-.53799.29986-1.2259.29986zm0-.64382q.47625 0 .84666-.21167.37042-.22049.58209-.60854.22048-.39687.22048-.9084 0-.52035-.22048-.9084-.21167-.38806-.58209-.59973-.37041-.21166-.84666-.21166-.47625 0-.84667.21166-.37042.21167-.5909.59972-.22049.38806-.22049.9084 0 .51154.22049.90841.22048.38805.5909.60854.37042.21167.84667.21167z" />
                        <path d="m323.52098 85.43093-.14111-4.2686h.86431l-.14111 4.2686zm.29104 1.9491q-.22048 0-.37041-.14993t-.14993-.3616q0-.21167.14993-.35278.14993-.14993.37041-.14993.22931 0 .37042.14993.14993.14111.14993.35278 0 .21167-.14993.3616-.14111.14993-.37042.14993z" />
                    </g>
                </svg>
            </Stack>
        </Stack>
    )
}

export default Intro