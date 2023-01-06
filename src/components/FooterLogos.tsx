import '../style.css';
import { IFooterLogos } from '../types';

export function FooterLogos({ logos, altClass }: IFooterLogos) {
  return (
    <div className={`logos ${altClass}`}>
      {logos?.map((user, id) => (
        <a className="logos__item" href={user.link} title={user.name} key={id}>
          <img src={user.img} title={user.name} />
        </a>
      ))}
    </div>
  );
}
