import { Routes } from '@angular/router';
import { LoginFormComponent } from './app/login-form/login-form.component';
import { ChatroomComponent } from './app/chatroom/chatroom.component';
import { SignupFormComponent } from './app/signup-form/signup-form.component';

export const appRoutes: Routes = [
    {path: 'signup', component: SignupFormComponent },
    {path: 'login', component: LoginFormComponent },
    {path: 'chat', component: ChatroomComponent },
    {path: '', redirectTo: '/login', pathMatch: 'full'}
];