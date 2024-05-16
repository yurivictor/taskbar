# Version: 0.0.2
refreshFrequency: 1000
style: """
    background: rgba( 0, 0, 0, .1)
    bottom: 16px
    align-items: center;
    display: flex
    justify-content: space-between;
    left: 445px
    overflow: hidden;
    position:absolute
    width: 840px;
    
    #cover
        display:block
        width: 40px
        height: 40px
    #cover img
        width: 40px
        height: 40px
    p
        font-size: 12px
        line-height: 40px;
        font-family: Menlo;
        padding: 0;
        margin: 0;
        width: 840px
        text-align: center;
    @keyframes scroll {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0%);
        }
    }


    #iTunesPre
        display: inline-block
        margin-right:5px
    #iTunesPre span
        display: inline-block
        width: 0
        height: 0
        border-top: 5px solid transparent
        border-right: 10px solid #4E544E
        border-bottom: 5px solid transparent
    #iTunesNext
        display: inline-block
    #iTunesNext span
        display: inline-block
        width: 0
        height: 0
        border-top: 5px solid transparent
        border-left: 10px solid #4E544E
        border-bottom: 5px solid transparent
    #iTunesPause
        display: inline-block
        margin: 0 8px 0 3px;

    #iTunesPause span
        display: inline-block
        height: 9px
        width: 4px
        display: inline-block
        background: #4E544E
    #iTunesPlay
        margin: 0 8px 0 5px;
        display: inline-block
        width: 0
        height: 0
        border-top: 5px solid transparent
        border-left: 10px solid #4E544E
        border-bottom: 5px solid transparent
    #controls
        align-items: center;
        display: flex;
        margin-left: auto;
"""

# animation: scroll 30s linear infinite alternate;
# transform: translateX(100%);

render: -> """
    <p><strong><span id="iTunesArtist"></span></strong> <span id="iTunesTitle"></span></p>
"""

command:    "osascript 'iTunesMiniPlayer.widget/iTunes.scpt'"

update: (output, domEl) ->
    iTunesvalues = output.split('~')
    
    if $(domEl).find('#iTunesTitle').text() == iTunesvalues[0]
        return
        
    $(domEl).find('#iTunesArtist').text("#{iTunesvalues[1]}")
    $(domEl).find('#iTunesTitle').text("#{iTunesvalues[0]}")
