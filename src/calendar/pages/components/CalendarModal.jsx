import { useMemo, useState } from 'react';
import { addHours, differenceInSeconds } from 'date-fns';
import Modal from 'react-modal';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import es from 'date-fns/locale/es';
import { useUiStore } from '../../../hooks';

registerLocale('es', es);

export const CalendarModal = () => {
  const [formValues, setFormValues] = useState({
    start: new Date(),
    end: addHours(new Date(), 3),
    title: 'Gerardo',
    notes: 'Mundo',
  });

  const { isOpenDateModal, onCloseDateModal } = useUiStore();
  const [formSubmited, setFormSubmited] = useState(false);

  const onInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onDateChange = (target, changing) => {
    setFormValues({
      ...formValues,
      [changing]: target,
    });
  };

  const closeModal = () => {
    onCloseDateModal();
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

  const classTitle = useMemo(() => {
    if (!formSubmited) return '';
    return formValues.title.length > 3 ? 'is-valid' : 'is-invalid';
  }, [formValues.title, formSubmited]);

  const onSubmit = event => {
    event.preventDefault();
    setFormSubmited(true);

    const difference = differenceInSeconds(formValues.end, formValues.start);
    if (isNaN(difference) || difference <= 0) {
      Swal.fire('Error en las fechas', 'Revisa las fechas ingresadas', 'error');
      return;
    }
    if (formValues.title.length <= 0) return;
    console.log(formValues);
  };

  return (
    <Modal
      isOpen={isOpenDateModal}
      onRequestClose={closeModal}
      style={customStyles}
      className='modal'
      overlayClassName='modal-fondo'
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form onSubmit={onSubmit} className='container'>
        <div className='form-group mb-2'>
          <label>Fecha y hora inicio</label>
          <DatePicker
            className='form-control'
            selected={formValues.start}
            dateFormat='Pp'
            onChange={event => onDateChange(event, 'start')}
            showTimeSelect
            locale='es'
            timeCaption='Hora'
          />
        </div>

        <div className='form-group mb-2'>
          <label>Fecha y hora fin</label>
          <DatePicker
            className='form-control'
            minDate={formValues.start}
            selected={formValues.end}
            dateFormat='Pp'
            onChange={event => onDateChange(event, 'end')}
            showTimeSelect
            locale='es'
            timeCaption='Hora'
          />
        </div>

        <hr />
        <div className='form-group mb-2'>
          <label>Titulo y notas</label>
          <input
            type='text'
            className={`form-control ${classTitle}`}
            placeholder='Título del evento'
            name='title'
            value={formValues.title}
            onChange={onInputChange}
            autoComplete='off'
          />
          <small id='emailHelp' className='form-text text-muted'>
            Una descripción corta
          </small>
        </div>

        <div className='form-group mb-2'>
          <textarea
            type='text'
            className='form-control'
            placeholder='Notas'
            rows='5'
            name='notes'
            value={formValues.notes}
            onChange={onInputChange}
          ></textarea>
          <small id='emailHelp' className='form-text text-muted'>
            Información adicional
          </small>
        </div>

        <button type='submit' className='btn btn-outline-primary btn-block'>
          <i className='far fa-save'></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
