import logo from './logo.svg';
import './App.css';

function App() {
    let age
    const isAdult = true;

    let admin
    const isAdmin = true;
    
    if (isAdmin) {
    admin = <div>
        <p>
          firstabzac
        </p>
        <p>
          secabzac
        </p>
        <p>
          thirdabzac
        </p>
      </div>
    } 




    if(isAdult) {
      age = <p>Добро пожаловать на сайт!</p>
    } else {
      age = <p>Боюсь, ваш возраст слишком мал для входа на сайт!</p>
    }



  const Second = 'tedddxt'
  const Third = <p>
    text
    </p>
  const text1 = <p>текст1</p> 
  const text2 = <p>текст2</p>
  const attr = 'block'
  const str = 'block'
  let show_text
  const show = true;
  const arr = [<li>a</li>, <li>b</li>, <li>c</li>, <li>d</li>, <li>e</li>]
  if (show) {
    show_text = 'текст1'
  } else {
    show_text = 'текст2'
  }
  const getText = <div>
    <p>текст</p>
  </div>

let getNum1 = 1
let getNum2 = 2

   const workers = [
    {firstName: 'Nikita', lastName: 'Kurenin', days: 31, rate: 8},
    {firstName: 'Petya', lastName: 'Petrov', days: 29, rate: 4},
    {firstName: 'Ivan', lastName: 'Ivanov', days: 20, rate: 10},
    {firstName: 'Andrey', lastName: 'Andreev', days: 10, rate: 3},
   ]

   let sum = 0

  return (
    <div>
      <div className='Первые практические задания'>
      <div>
        texttext
        <p>texttext</p>
        <p>text</p>
        <input /> <br /> <input />
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      <table border={3}>
        <tbody>
          <tr>
          <td>a</td>
          <td>b</td>
          <td>c</td>
          </tr>
          <tr>
          <td>d</td>
          <td>e</td>
          <td>f</td>
          </tr>
          <tr>
          <td>g</td>
          <td>h</td>
          <td>i</td>
          </tr>
        </tbody>
      </table>
      <p className='fifi'>first</p>
      <p className='sese'>second</p>
      <p className='thth'>third</p>
      </div>
      </div>



      <div className='Вторые практические задания'>
    <div>
      {age}
    </div>

    <div>
      {admin}
    </div>
    </div>

    <div className='Третьи практические задания'>
      1
      <div>
        <div>text</div>
      </div>
      2
      <div>
        {Second}
      </div>
      3
      <div>
        {Third}
      </div>
      4
      <div>
        {text1} <p>!!!</p> {text2}
      </div>
      5
      <div id={attr}>
        текст
      </div>
      6
      <div className={str}> 
        текст
      </div>
      7
      <div className='seven'> 
        text
      </div>
      8
      <div>
        {show_text}
      </div>
      9
      <ul>
        {arr}
      </ul>
      10
      {getText}   {/* 10 */}
      11
      <div>
        текст {getNum1 + getNum2}
      </div>
      12
      <table border={1}>
        <thead>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Кол-во дней</th>
          <th>Ставка</th>
          <th>Зарплата</th>
        </thead>
        <tbody>
          {workers.map((item) => {
            sum += item.rate * item.days
            return (
              <tr>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.days}</td>
                <td>{item.rate}</td>
                <td>{item.rate * item.days}</td>
              </tr>
            )
          })}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Итого:</td>
            <td>{sum}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );

}


export default App;




