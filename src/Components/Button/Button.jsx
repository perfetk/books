import React , { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.sc';


class Button extends PureComponent {
   render() {

       const { text, onClick, type, className } = this.props;
       return (
           <StyledButton
               className={className}
               type={type}
               onClick={onClick}
           >
               {text}
           </StyledButton>
       )
   }
};

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};

Button.defaultProps = {
    type:'button',
    onClick: () => {},
    className: null
}

export default Button;