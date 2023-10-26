import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Overlay, Container, Footer } from './styles';
import Button from '../Button';
import ReactPortal from '../ReactPortal';

export default function Modal({ danger, isLoading, visible, title, children, cancelLabel, confirmLabel, onCancel, onConfirm }) {
  if (!visible) {
    return null;
  }

  return (
    <ReactPortal containerId="modal-root">
      <Overlay>
        <Container danger={danger ? danger : null}>
          <h1>{title}</h1>

          <div className="modal-body">
            {children}
          </div>

          <Footer>
            <button disabled={isLoading} onClick={onCancel} type='button' className='cancelButton'>
              {cancelLabel}
            </button>

            <Button isLoading={isLoading} onClick={onConfirm} type='button' danger={danger ? danger : null}>
              {confirmLabel}
            </Button>
          </Footer>
        </Container>
      </Overlay>,
    </ReactPortal>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
  isLoading: PropTypes.bool,
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
}

Modal.defaultProps = {
  danger: false,
  isLoading: true,
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar',
};
