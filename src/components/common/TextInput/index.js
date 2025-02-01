import '../../../styles/components/common.styles.scss'

export const TextInput = ({ onStartEditing, count = 0, inputRef, errorMessage = "", multiline, colorClass, text, icon, onClick, onMouseOver, onMouseLeave, ...rest }) => {
  const darkTheme = true

  return (
    <div className='input-wrapper'>
      {
        multiline ? <textarea onChange={() => onStartEditing(inputRef)} ref={inputRef} className={`input area ${(((colorClass === 'primary' && darkTheme) || (colorClass === 'secondary' && !darkTheme)) && 'light-input') || 'dark-input'}`} {...rest} /> :
          <input onChange={() => onStartEditing(inputRef)} ref={inputRef} className={`input ${(((colorClass === 'primary' && darkTheme) || (colorClass === 'secondary' && !darkTheme)) && 'light-input') || 'dark-input'}`} {...rest} />
      }
      {multiline && <div className='letter-limit'>{count}/2000</div>}
    </div >
  )
}