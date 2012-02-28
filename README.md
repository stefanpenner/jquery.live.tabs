# jQuery Live Tabs

jQuery tab implementation that binds at runtime. Only some semantic markup is needed, not binding at runtime.


## Example

    <!DOCTYPE html>
    <html>
      <head>
        <script src="http://code.jquery.com/jquery-1.6.2.min.js"></script>
        <script src="jquery.live.tabs.js"></script>
      </head>
      <body>
        <div class="tab-bar">
          <ul>
            <li><a class="tab" href="#pane-1">Pane 1</li>
            <li><a class="tab" href="#pane-2">Pane 2</li>
            <li><a class="tab" href="#pane-3">Pane 3</li>
            <li><a class="tab" href="ajax.html" data-pane="#pane-ajax">Pane Ajax</li>
          </ul>
        </div>
        <div class="tab-body">
          <div class="panes">
            <div class="pane" id="pane-1">
              <h1> OMG 1</h1>
            </div>
            <div class="pane" id="pane-2">
              <h1> OMG 2</h1>
            </div>
            <div class="pane" id="pane-3">
              <h1> OMG 3</h1>
            </div>
            <div class="pane" id="pane-ajax">
              <h1>loading</h1>
            </div>
          </div>
        </div>
      </body>
    </html>