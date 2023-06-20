
import "./App.css"
import PropTypes from 'prop-types';
import TaskCasd from './components/TaskCard';
interface Props {
  title: string
}
function App({ title }: Props) {


  return (
    <>
      <div>
        {title}

        <TaskCasd />

      </div>

    </>
  )
}

export default App
