import AddressBookIcon from '../icons/AddressBookIcon';
import FileIcon from '../icons/FileIcon';
import JobIcon from '../icons/JobIcon';
import MessageCircleIcon from '../icons/MessageCircleIcon';
import StethoscopeIcon from '../icons/StethoscopeIcon';
import UserCheck from '../icons/UserCheckIcon';

export interface Topic {
  id: number;
  title: string;
  subTopis: Topic[];
  icon: React.ComponentType;
}

// Subtópicos
export const Curriculo: Topic = {
  id: 4,
  title: 'Currículo',
  subTopis: [],
  icon: FileIcon,
};

export const Habilidades: Topic = {
  id: 4,
  title: 'Habilidades',
  subTopis: [],
  icon: UserCheck,
};

export const Entrevista: Topic = {
  id: 4,
  title: 'Entrevista',
  subTopis: [],
  icon: MessageCircleIcon,
};

export const CarteiraDeTrabalho: Topic = {
  id: 4,
  title: 'Carteira de Trabalho',
  subTopis: [],
  icon: AddressBookIcon,
};

// Princiáis Tópicos
export const MundoDoTrabalhoOne: Topic = {
  id: 1,
  title: 'Mundo do trabalho 1',
  subTopis: [Curriculo, Habilidades, Entrevista, CarteiraDeTrabalho],
  icon: JobIcon,
};

export const MundoDoTrabalhoTwo: Topic = {
  id: 2,
  title: 'Mundo do trabalho 2',
  subTopis: [],
  icon: JobIcon,
};

export const SaudeOne: Topic = {
  id: 3,
  title: 'Saúde 1',
  subTopis: [],
  icon: StethoscopeIcon,
};

export const SaudeTwo: Topic = {
  id: 4,
  title: 'Saúde 2',
  subTopis: [],
  icon: StethoscopeIcon,
};
