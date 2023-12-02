function getMaxSizes(){
    var height = `${window.screen.availHeight}px`;
    var width = `${window.screen.availWidth}px`;
    document.querySelector('#root').style.setProperty('--maxWidth', width);

    return {
        'height': height,
        'width': width
    }
}
export async function loadWrapper(head, subhead) { 
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';

    const heading = document.createElement('div');
    const subheading = document.createElement('div');
    heading.className = 'text wrapper__heading';
    subheading.className = 'text wrapper__subheading'
    heading.innerHTML = `Welcome <br> to <br> ${head}`;
    subheading.innerHTML = `${subhead}`;


    wrapper.append(heading, subheading);
    wrapper.style.setProperty('--maxWrapperHeight', `${getMaxSizes().height}`);
    wrapper.style.setProperty('--maxWrapperWidth', `${getMaxSizes().width}`);
    document.querySelector('#root').append(wrapper);
}

export async function loadSectionFirst(){
    const section = document.createElement('div');
    section.className = 'section __first';
    section.innerHTML = `This is first section .`
    // document.querySelector('#root').append(section);
}