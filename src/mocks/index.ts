import { Slide } from '@/types/slides'

export const slides: Slide[] = [
  {
    id: 'xsxa123',
    elements: [
      {
        id: 'sdasaxs',
        type: 'chart',
        left: 680,
        top: 20,
        width: 300,
        height: 300,
        chartType: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
          series: [
            [5, 2, 4, 2, 10],
          ],
        },
      },
      {
        id: '1213asa',
        type: 'table',
        left: 20,
        top: 20,
        width: 400,
        height: 108,
        colWidths: [0.25, 0.25, 0.25, 0.25],
        outline: {
          width: 1,
          style: 'solid',
          color: '#999',
        },
        data: [
          [
            { id: '1', colspan: 1, rowspan: 1, text: '1' },
            { id: '2', colspan: 1, rowspan: 1, text: '2' },
            { id: '3', colspan: 1, rowspan: 1, text: '3' },
            { id: '4', colspan: 1, rowspan: 1, text: '4' },
          ],
          [
            { id: '6', colspan: 1, rowspan: 1, text: '6' },
            { id: '7', colspan: 1, rowspan: 1, text: '7' },
            { id: '8', colspan: 1, rowspan: 1, text: '8' },
            { id: '9', colspan: 1, rowspan: 1, text: '9' },
          ],
          [
            { id: '11', colspan: 1, rowspan: 1, text: '11' },
            { id: '12', colspan: 1, rowspan: 1, text: '12' },
            { id: '13', colspan: 1, rowspan: 1, text: '13' },
            { id: '14', colspan: 1, rowspan: 1, text: '14' },
          ],
        ],
      },
    ],
  },
  {
    id: 'xxx1',
    background: {
      type: 'solid',
      color: '#fff',
    },
    elements: [
      {
        id: 'xxx1',
        type: 'text',
        left: 190,
        top: 50,
        width: 320,
        height: 104,
        rotate: 0,
        shadow: {
          h: 1,
          v: 1,
          blur: 3,
          color: 'rgba(10, 10, 10, .5)'
        },
        opacity: 1,
        lock: false,
        content: '<p style=\'text-align: center;\'><span style=\'font-size: 28px;\'><span style=\'color: rgb(232, 107, 153); font-weight: bold;\'>一段测试文字</span>，字号固定为<span style=\'font-weight: bold; font-style: italic; text-decoration-line: underline;\'>28px</span></span></p>',
      },
      {
        id: 'xxx3',
        type: 'image',
        left: 80,
        top: 250,
        width: 180,
        height: 180,
        rotate: 0,
        outline: {
          width: 4,
          style: 'solid',
          color: '#333'
        },
        clip: {
          range: [[30, 0], [100, 70]],
          shape: 'ellipse'
        },
        fixedRatio: false,
        lock: false,
        src: 'https://img.lessonplan.cn/IMG/Show/ppt/3ab74e91-c34f-499d-9711-166e423d4dd6/1573622467064v2-7aa3ce420052983d91c6d01b47a7441d_hd.jpg',
      },
      {
        id: 'xxx2',
        type: 'image',
        left: 750,
        top: 320,
        width: 150,
        height: 150,
        rotate: 0,
        fixedRatio: true,
        lock: false,
        src: 'https://img.lessonplan.cn/IMG/Show/ppt/3ab74e91-c34f-499d-9711-166e423d4dd6/62d9adb3-e7a6-4dc4-a352-095cffb49f08/b1be1a2f-f893-47d3-a8a3-eac7d04d395f/1596159381259v2-b2c69096d25ae16bf6ca09e30add3e65_hd.jpg',
      },
    ],
    animations: [
      {
        elId: 'xxx1',
        type: 'rotateIn',
        duration: 1000,
      },
      {
        elId: 'xxx2',
        type: 'zoomIn',
        duration: 1000,
      },
    ],
  },
  {
    id: 'sajd172',
    elements: [
      {
        id: 'yyx1',
        type: 'text',
        left: 590,
        top: 90,
        width: 220,
        height: 188,
        rotate: 0,
        opacity: 1,
        lock: false,
        content: '<div>😀 😐 😶 😜 🔔 ⭐ ⚡ 🔥 👍 💡 🔰 🎀 🎁 🥇 🏅 🏆 🎈 🎉 💎 🚧 ⛔ 📢 ⌛ ⏰ 🕒 🧩 🎵 📎 🔒 🔑 ⛳ 📌 📍 💬 📅 📈 📋 📜 📁 📱 💻 💾 🌏 🚚 🚡 🚢💧 🌐 🧭 💰 💳 🛒</div>',
      },
      {
        id: 'xsfdas',
        type: 'line',
        width: 2,
        left: 100,
        top: 400,
        end: [0, 0],
        start: [300, 120],
        style: 'solid',
        color: '#888',
        points: ['', 'arrow'],
      },
      {
        id: 'xxx7',
        type: 'shape',
        left: 130,
        top: 50,
        width: 150,
        height: 150,
        rotate: 0,
        fill: '#eebc29',
        opacity: 0.9,
        fixedRatio: false,
        lock: false,
        viewBox: 1024,
        path: 'M721.35111111 475.59111111H302.64888889c-5.00622222 0-9.10222222 4.096-9.10222222 9.10222222v54.61333334c0 5.00622222 4.096 9.10222222 9.10222222 9.10222222h418.70222222c5.00622222 0 9.10222222-4.096 9.10222222-9.10222222v-54.61333334c0-5.00622222-4.096-9.10222222-9.10222222-9.10222222z M512 2.27555555C230.51377778 2.27555555 2.27555555 230.51377778 2.27555555 512s228.23822222 509.72444445 509.72444445 509.72444445 509.72444445-228.23822222 509.72444445-509.72444445S793.48622222 2.27555555 512 2.27555555z m0 932.97777778c-233.69955555 0-423.25333333-189.55377778-423.25333333-423.25333333s189.55377778-423.25333333 423.25333333-423.25333333 423.25333333 189.55377778 423.25333333 423.25333333-189.55377778 423.25333333-423.25333333 423.25333333z',
      }
    ],
    animations: [
      {
        elId: 'yyx1',
        type: 'flipInX',
        duration: 1000,
      },
    ],
  },
]