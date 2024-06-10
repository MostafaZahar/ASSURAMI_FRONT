import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SidebarService {
    public isCollapsed = signal(false);
}