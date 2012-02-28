# jQuery Live Tabs

jQuery tab implementation that binds at runtime. Only some semantic markup is needed, not binding at runtime.


## Example

```html
<!DOCTYPE html>

<script src='http://code.jquery.com/jquery-1.6.2.min.js'></script>
<script src='jquery.live.tabs.js'></script>

<menu class='tab-bar'>
  <a class='tab' href='#pane-1'>Pane 1</a>
  <a class='tab' href='#pane-2'>Pane 2</a>
  <a class='tab' href='#pane-3'>Pane 3</a>
  <a class='tab' href='ajax.html' data-pane='#pane-ajax'>Pane Ajax</a>
</menu>

<section>
  <article id='pane-1'>
    <h1> OMG 1</h1>
  </article>
  <article id='pane-2'>
    <h1> OMG 2</h1>
  </article>
  <article id='pane-3'>
    <h1> OMG 3</h1>
  </article>
  <article id='pane-ajax'>
    <h1>loading</h1>
  </article>
</section>
```
