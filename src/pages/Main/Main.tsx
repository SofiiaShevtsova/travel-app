import {
   ChangeEvent,
   useState,
   useEffect,
} from 'react';
import { FiSearch } from 'react-icons/fi';
import {
   useDispatch,
   useSelector,
} from 'react-redux';

import {
   TripType,
} from '../../commons/types';
import {
   Input,
   Select,
   Card,
   Container,
} from '../../components/commons';
import {
   MainBox,
   FilterBox,
   InputBox,
   TripList,
} from './main_styles';
import { getTrips } from '../../redux/trip/tripSelectors';
import { getAllTrips } from '../../redux/trip/tripOperations';

const selectsArray = [
   {
      name: 'duration',
      dataAtribute: 'filter-duration',
      options: [
         { value: '', text: 'duration' },
         { value: '0_x_5', text: '> 5 days' },
         { value: '5_x_10', text: '> 10 days' },
         { value: '10_x', text: '< 10 days' },
      ],
   },
   {
      name: 'level',
      dataAtribute: 'filter-level',
      options: [
         { value: '', text: 'level' },
         { value: 'easy', text: 'easy' },
         { value: 'moderate', text: 'moderate' },
         {
            value: 'difficult',
            text: 'difficult',
         },
      ],
   },
];

const Main = () => {
   const tripsList = useSelector(getTrips);

   const dispatcher: any = useDispatch();

   const [query, setQuery] = useState('');
   const [duration, setDuration] = useState('');
   const [level, setLevel] = useState('');
   const [listFiltred, setListFiltred] =
      useState(tripsList);

   useEffect(() => {
      if (!tripsList.length) {
         dispatcher(getAllTrips());
      }
   }, [dispatcher, tripsList.length]);

   useEffect(() => {
      if (tripsList) {
         let newList: TripType[] = tripsList;
         newList = query
            ? newList.filter(
                 (trip) =>
                    trip.title
                       .toLowerCase()
                       .search(
                          query.toLowerCase(),
                       ) !== -1,
              )
            : newList;
         newList =
            level !== ''
               ? newList.filter(
                    (trip) =>
                       trip.level === level,
                 )
               : newList;
         newList =
            duration !== ''
               ? newList.filter((trip) => {
                    switch (duration) {
                       case '0_x_5':
                          return (
                             trip.duration < 6
                          );
                       case '5_x_10':
                          return (
                             trip.duration < 11 &&
                             trip.duration > 5
                          );
                       case '10_x':
                          return (
                             trip.duration > 10
                          );
                       default:
                          break;
                    }
                 })
               : newList;
         setListFiltred(newList);
      }
   }, [query, level, duration, tripsList]);

   const onChangeQuery = (event: ChangeEvent) => {
      const input: HTMLInputElement =
         event.target as HTMLInputElement;
      const newQuery: string = input.value;
      setQuery(newQuery);
   };

   const onChangeSelect = (
      event: ChangeEvent,
   ) => {
      const element: HTMLSelectElement =
         event.target as HTMLSelectElement;
      if (element.id === 'duration') {
         setDuration(element.value);
      }
      if (element.id === 'level') {
         setLevel(element.value);
      }
   };

   return (
      <MainBox>
         <FilterBox>
            <Container>
               <>
                  <InputBox>
                     <FiSearch />
                     <Input
                        name={'search'}
                        onChange={onChangeQuery}
                        placeholder="search by title"
                     />
                  </InputBox>
                  {selectsArray.map((select) => (
                     <Select
                        name={select.name}
                        list={select.options}
                        dataAtribute={
                           select.dataAtribute
                        }
                        key={select.dataAtribute}
                        onChange={onChangeSelect}
                     />
                  ))}
               </>
            </Container>
         </FilterBox>
         <TripList>
            {listFiltred &&
               listFiltred.map((trip) => (
                  <Card
                     trip={trip}
                     key={trip.id}
                  />
               ))}
         </TripList>
      </MainBox>
   );
};

export default Main;
