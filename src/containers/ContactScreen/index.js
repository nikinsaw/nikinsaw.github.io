
import { useCallback, useRef, useState } from 'react'
// library imports
import { useLottie } from 'lottie-react';
import { motion } from 'framer-motion'
// local imports
// components
import { YMotionComponent, Button, XMotionComponent } from '../../components';
// assets
import LiveAnimation from '../../assets/animations/live.json'
// styles
import '../../styles/screens/contact.styles.scss'
import { copyEmail, openLink } from '../../helpers/utils';
import { WHATSAPP_URL } from '../../helpers/constants';
import { TextInput } from '../../components/common/TextInput';

function ContactScreen() {
  const { View } = useLottie({
    animationData: LiveAnimation,
    loop: true,
    autoplay: true,
    rendererSettings: { preserveAspectRatio: 'xMidYMid slice', height: 70, width: 30 },
    speed: 0.1,
    duration: 3,
  })
  const nameInputRef = useRef(null)
  const emailInputRef = useRef(null)
  const messageInputRef = useRef(null)
  const [count, setCount] = useState(0)

  const validateInputField = (inputRef, type) => {
    const value = inputRef.current.value
    switch (type) {
      case 'name':
        const nameRegexp = /^[a-zA-Z]{3,}$/
        if (!nameRegexp.test(value)) {
          inputRef.current.classList.add('error')
          return false
        }
        inputRef.current.classList.remove('error')
        break;

      case 'email':
        const emailRegEx = /\S+@\S+\.\S+/;
        if (!emailRegEx.test(value)) {
          inputRef.current.classList.add('error')
          return false
        }
        inputRef.current.classList.remove('error')
        break;

      case 'message':
        if (value.length < 10 || value.length > 2000) {
          inputRef.current.classList.add('error')
          return false
        }
        inputRef.current.classList.remove('error')
        break;

      default:
        break;
    }
    return true
  }


  const onSendPress = () => {
    const nameIsValidated = validateInputField(nameInputRef, 'name');
    const emailIsValidated = validateInputField(emailInputRef, 'email');
    const messageIsaValidated = validateInputField(messageInputRef, 'message');
    if (!nameIsValidated || !emailIsValidated || !messageIsaValidated) {
      return
    }
  }

  const onStartEditing = useCallback((inputRef) => {
    setCount(inputRef.current.value.length)
    inputRef.current.classList.remove('error')
  }, [])


  return (
    <motion.div className='contact__main-wrapper' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: 20 }}>
      <div className='contact__content'>
        <YMotionComponent className='contact__title' tag='h1' delay={0.01} >Contact</YMotionComponent>
        <YMotionComponent className='contact__subtitle' tag='h2' delay={0.035}>Let's talk about working together</YMotionComponent>
        <YMotionComponent className='contact__status' tag='div' delay={0.08}>
          <div className='contact__status__live-icon-wrapper'>
            {View}
            <div className={'contact__status__live-icon'} />
          </div>
          <h3 className='contact__status__text'>Available for new opportunities</h3>
        </YMotionComponent>
        <YMotionComponent className='contact__description' tag='div' delay={0.15}>
          <p>
            I'm a firm believer in the power of collaboration and love connecting with inspiring individuals who are as excited as I am about the future of science, art and tech.
          </p>
          <YMotionComponent className='contact__call-email-buttons-wrapper' tag='div' delay={0.1} >
            <YMotionComponent className='contact__book-call-button-wrapper' tag='div' delay={0.1} startX={-20}>
              <Button text='Say Hi!' colorClass='secondary' icon={require('../../assets/icons/icons_70/icons8-whatsapp-48.png')} onClick={() => openLink(WHATSAPP_URL)} />
            </YMotionComponent>
            <YMotionComponent className='contact__email-button-wrapper' tag='div' delay={0.1} startX={20}>
              <Button text='Copy email' colorClass='secondary' icon={require('../../assets/icons/icons_70/icons8-copy-48.png')} onClick={copyEmail} />
            </YMotionComponent>
          </YMotionComponent>
        </YMotionComponent>
        <YMotionComponent className='contact__divider-wrapper'>
          <XMotionComponent className='contact__divider contact__divider-left' tag='div' delay={0.6} startX={-50} />
          <YMotionComponent tag='div' delay={0.1}>or</YMotionComponent>
          <XMotionComponent className='contact__divider contact__divider-right' tag='div' delay={0.6} startX={50} />
        </YMotionComponent>

        <YMotionComponent className='contact__name-email-inputs-wrapper' tag='div' delay={0.1} >
          <TextInput onStartEditing={onStartEditing} inputRef={nameInputRef} placeholder='Your Name' colorClass='secondary' errorMessage='Please enter a valid name'
          />
          <TextInput onStartEditing={onStartEditing} inputRef={emailInputRef} placeholder='Your Email' colorClass='secondary' errorMessage='Please enter a valid email address'
          />
        </YMotionComponent>
        <YMotionComponent className='contact__message-input-wrapper' tag='div' delay={0.1} >
          <TextInput count={count} onStartEditing={onStartEditing} inputRef={messageInputRef} placeholder='Your Message' colorClass='secondary' multiline errorMessage='Please enter a message between 10 to 2000 characters'
          />
        </YMotionComponent>
        <Button text='Send' colorClass='primary' onClick={onSendPress} />
      </div>
    </motion.div>
  );
}

export default ContactScreen;
