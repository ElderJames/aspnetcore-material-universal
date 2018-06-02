### Popover

```
<shriek-popover #popover="shriekPopover">
  <shriek-github-button></shriek-github-button>
</shriek-popover>
```

```
<button mat-icon-button [popoverTriggerFor]="popover">
  <mat-icon>grade</mat-icon>
</button>
<shriek-popover #popover>
  <shriek-github-button></shriek-github-button>
</shriek-popover>
```

horizontalPosition
    * before
    * start
    * center
    * end
    * after

verticalPosition
    * above
    * start
    * center
    * end
    * below