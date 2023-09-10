import AcademyAppConfig from './academy/AcademyAppConfig';
import CalendarAppConfig from './calendar/CalendarAppConfig';
import ChatAppConfig from './chat/ChatAppConfig';
import ContactsAppConfig from './contacts/ContactsAppConfig';
import ECommerceAppConfig from './e-commerce/ECommerceAppConfig';
import FileManagerAppConfig from './file-manager/FileManagerAppConfig';
import MailboxAppConfig from './mailbox/MailboxAppConfig';
import NotesAppConfig from './notes/NotesAppConfig';
import ScrumboardAppConfig from './scrumboard/ScrumboardAppConfig';
import TasksAppConfig from './tasks/TasksAppConfig';
import HelpCenterAppConfig from './help-center/HelpCenterAppConfig';
import ProfileAppConfig from './profile/profileAppConfig';
import CrudAppConfig from './crud/CrudAppConfig';
import TodoReduxConfig from './todo-redux/TodoReduxConfig';
import TodoContextConfig from './todo-context/TodoContextConfig';

const appsConfigs = [
  MailboxAppConfig,
  FileManagerAppConfig,
  ContactsAppConfig,
  CalendarAppConfig,
  ChatAppConfig,
  ECommerceAppConfig,
  ScrumboardAppConfig,
  AcademyAppConfig,
  NotesAppConfig,
  TasksAppConfig,
  HelpCenterAppConfig,
  ProfileAppConfig,
  CrudAppConfig,
  TodoReduxConfig,
  TodoContextConfig
];

export default appsConfigs;
