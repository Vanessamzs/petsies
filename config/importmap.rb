# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "bootstrap", to: "bootstrap.min.js", preload: true
pin "@popperjs/core", to: "popper.js", preload: true
# config/importmap.rb
pin "@fullcalendar/core", to: "https://cdn.skypack.dev/@fullcalendar/core@6.1.15" # @6.1.15
pin "preact" # @10.12.1
pin "preact/compat", to: "preact--compat.js" # @10.12.1
pin "preact/hooks", to: "preact--hooks.js" # @10.12.1
pin "@fullcalendar/daygrid", to: "https://cdn.skypack.dev/@fullcalendar/daygrid@6.1.15" # @6.1.15
pin "@fullcalendar/list", to: "https://cdn.skypack.dev/@fullcalendar/list@6.1.15"
pin "sweetalert2" # @11.12.3
