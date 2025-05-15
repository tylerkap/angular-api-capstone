import { Component } from '@angular/core';
import {ChangeDetectionStrategy, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import {merge} from 'rxjs';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIcon, RouterLink, RouterOutlet],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
}
