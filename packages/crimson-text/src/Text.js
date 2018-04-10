import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Text = props => {
  const {
    children,
    className,
    display,
    selector,
    ...rest
  } = props

  const componentClassName = classNames(
    'IndigoText',
    display && `is-display-${display}`,
    className
  )

  return React.createElement(
    selector, {
      children,
      className: componentClassName,
      ...rest
    }
  )
}

Text.propTypes = {
  /**
   * Defines the `display` property.
   */
  display: PropTypes.oneOf(['block', 'inline', 'inline-block']),
  /**
   * The HTML selector for the component.
   */
  selector: PropTypes.oneOf(['div', 'span'])
}

Text.defaultProps = {
  display: 'inline',
  selector: 'span'
}

export default Text
