import Card from '../components/Card';
import leo from '../assets/dicaprio.jpg';
import natalie from '../assets/natalie.jpg';
import will from '../assets/willsmith.jpg'

const actors = [
  { image: leo, name: 'Leonardo Dicaprio' },
  { image: natalie, name: 'Natalie Portman' },
  { image: will, name: 'Will Smith' },
];

export default function Principal() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 ">
      {actors.map((actor, index) => (
        <Card key={index} image={actor.image} name={actor.name} />
      ))}
    </div>
  );
}
