import './EventForm.css'
const EventFrom = () => {
  return (
    <div>
      <form className='new-event-form'>
        <label>
          <span>Event label</span>
          <input type="text" />
        </label>
        <label>
          <span>Event date</span>
          <input type="date" />
        </label>
      </form>
    </div>
  );
};

export default EventFrom;
