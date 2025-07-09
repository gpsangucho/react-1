
import AccessWithLimit from './AccessWithLimit';
import AutoCounter from './AutoCounter';
import ClickHistory from './ClickHistory';


export default function IndexUserState(){
  return (
    <>
        <AccessWithLimit/>
        <AutoCounter/>
        <ClickHistory/>
    </>
    
  );

}


