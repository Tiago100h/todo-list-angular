import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const matSnackBar = inject(MatSnackBar);

  // next(req).subscribe({
  //   error: (err) => {
  //     const errorMessage = `⚠️ ${err?.message || 'Unknown Error'}`;

  //     matSnackBar.open(errorMessage, 'Close', { 
  //       duration: 5000, 
  //       horizontalPosition: 'end' 
  //     });
  //   }
  // });

  return next(req);
};
