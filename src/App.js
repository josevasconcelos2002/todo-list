import {Title} from './title';
import { Button } from './button';
import { Select } from './select';

function App() {
  return (
    <body className= "bg-gray-200 h-full">
      <main className="App ml-[10%] mr-[10%] px-4">
        <Title />
        <Button />
        <Select />
      </main>
    </body>
  );
}

export default App;