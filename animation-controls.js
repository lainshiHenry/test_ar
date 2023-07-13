
const animationNames = {
    idle: 'idle',
  };
  
  updateAnimationMixer = () => {
  
    const data = {}
    data.clip = 'none'
    Object.entries(animationNames).forEach((name) => {
  
      const el = document.getElementById(name[0])
      
      // if (el.checked) {
        data.clip = name[1]
      // }
    })
  
    // const keys = ['duration',
    //               'clampWhenFinished',
    //               'crossFadeDuration',
    //               'loop',
    //               'repetitions',
    //               'timeScale',
    //               'startAt']
    // keys.forEach((key) => {
    //   const el = document.getElementById(key)
    //   let value = el.value
    //   debugger;
    //   const type = AFRAME.components['animation-mixer'].schema[key].type
  
    //   if (type === 'number' && isNaN(value)) {
    //     return;
    //   }
  
    //   if (type === 'boolean') {
    //     value = el.checked    
    //   }
      
    //   data[key] = value
    // })
  
    const target = document.getElementById('phoenix')
    target.setAttribute('animation-mixer', data)
  }
  
  document.addEventListener('DOMContentLoaded', () => {
  
    const inputs = document.querySelectorAll('input, select')
  
    inputs.forEach((input) => {
      input.addEventListener('change', updateAnimationMixer)
      input.addEventListener('click', updateAnimationMixer)
    })
  
    updateAnimationMixer()
  })